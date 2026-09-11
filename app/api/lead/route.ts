import { NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  phone: string;
  service: string;
};

const requiredEnv = ["GOOGLE_SHEETS_WEBHOOK_URL", "TELEGRAM_BOT_TOKEN", "TELEGRAM_CHAT_ID"] as const;

function isValidPayload(payload: LeadPayload) {
  return (
    payload.name?.trim().length >= 2 &&
    payload.phone?.replace(/[^\d+]/g, "").length >= 10 &&
    ["Вікна", "Кондиціонери", "Комплекс"].includes(payload.service)
  );
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;

    if (!isValidPayload(body)) {
      return NextResponse.json(
        { message: "Некоректні дані форми." },
        { status: 400 }
      );
    }

    const missingEnv = requiredEnv.filter((key) => !process.env[key]);
    if (missingEnv.length > 0) {
      return NextResponse.json(
        { message: `Не задані змінні середовища: ${missingEnv.join(", ")}` },
        { status: 500 }
      );
    }

    const submittedAt = new Date().toLocaleString("uk-UA", {
      dateStyle: "short",
      timeStyle: "short",
      timeZone: "Europe/Kyiv"
    });

    const payload = {
      name: body.name.trim(),
      phone: body.phone.trim(),
      service: body.service,
      submittedAt
    };

    const telegramText = [
      "Нова заявка з лендингу",
      "",
      `Ім'я: ${payload.name}`,
      `Телефон: ${payload.phone}`,
      `Послуга: ${payload.service}`,
      `Дата: ${payload.submittedAt}`
    ].join("\n");

    const sheetsRequest = fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),
      cache: "no-store"
    });

    const telegramRequest = fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: telegramText
        }),
        cache: "no-store"
      }
    );

    const [sheetsResponse, telegramResponse] = await Promise.all([sheetsRequest, telegramRequest]);

    if (!sheetsResponse.ok || !telegramResponse.ok) {
      const errors = [];

      if (!sheetsResponse.ok) {
        errors.push(`Google Sheets webhook: ${sheetsResponse.status}`);
      }

      if (!telegramResponse.ok) {
        errors.push(`Telegram API: ${telegramResponse.status}`);
      }

      return NextResponse.json(
        { message: `Не вдалося завершити інтеграції. ${errors.join("; ")}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: "Заявка успішно відправлена." });
  } catch {
    return NextResponse.json(
      { message: "Внутрішня помилка сервера." },
      { status: 500 }
    );
  }
}
