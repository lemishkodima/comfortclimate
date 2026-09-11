"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

export type ServiceType = "Вікна" | "Кондиціонери" | "Комплекс";

type FormData = {
  name: string;
  phone: string;
  service: ServiceType;
};

type FormState = "idle" | "submitting" | "success" | "error";

const initialData: FormData = {
  name: "",
  phone: "",
  service: "Вікна"
};

type LeadFormProps = {
  defaultService?: ServiceType;
};

export function LeadForm({ defaultService = "Вікна" }: LeadFormProps) {
  const [formData, setFormData] = useState<FormData>({
    ...initialData,
    service: defaultService
  });
  const [formState, setFormState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const isSubmitting = formState === "submitting";

  useEffect(() => {
    setFormData((current) => ({ ...current, service: defaultService }));
  }, [defaultService]);

  const statusClasses = useMemo(() => {
    if (formState === "success") return "text-teal";
    if (formState === "error") return "text-rose-600";
    return "text-slate-500";
  }, [formState]);

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormData, string>> = {};

    if (formData.name.trim().length < 2) {
      nextErrors.name = "Вкажіть ім'я від 2 символів.";
    }

    const normalizedPhone = formData.phone.replace(/[^\d+]/g, "");
    if (normalizedPhone.length < 10) {
      nextErrors.phone = "Вкажіть коректний номер телефону.";
    }

    if (!formData.service) {
      nextErrors.service = "Оберіть послугу.";
    }

    setFieldErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setFormState("error");
      setMessage("Перевірте, будь ласка, поля форми.");
      return;
    }

    setFormState("submitting");
    setMessage("Надсилання...");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Не вдалося відправити форму.");
      }

      setFormState("success");
      setMessage("Успішно відправлено. Ми зв'яжемося з вами найближчим часом.");
      setFormData({
        ...initialData,
        service: defaultService
      });
      setFieldErrors({});
    } catch (error) {
      setFormState("error");
      setMessage(error instanceof Error ? error.message : "Сталася помилка. Спробуйте ще раз.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-form"
      noValidate
    >
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal">Швидка заявка</p>
        <h3 className="font-heading mt-3 text-2xl font-semibold tracking-[-0.04em] text-foreground">Розрахуємо вартість під ваш об&apos;єкт</h3>
        <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
          Залиште контакти, а ми підберемо оптимальне рішення для вікон, кондиціонерів або комплексного монтажу.
        </p>
      </div>

      <div className="grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Ім&apos;я
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(event) =>
              setFormData((current) => ({ ...current, name: event.target.value }))
            }
            placeholder="Ваше ім'я"
            className="field-glass px-4 py-3 text-foreground outline-none transition focus:border-accent/40 focus:ring-2 focus:ring-accent/20"
          />
          {fieldErrors.name ? <span className="text-xs text-rose-600">{fieldErrors.name}</span> : null}
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Телефон
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={(event) =>
              setFormData((current) => ({ ...current, phone: event.target.value }))
            }
            placeholder="+38 (067) 000-00-00"
            className="field-glass px-4 py-3 text-foreground outline-none transition focus:border-accent/40 focus:ring-2 focus:ring-accent/20"
          />
          {fieldErrors.phone ? <span className="text-xs text-rose-600">{fieldErrors.phone}</span> : null}
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Послуга
          <select
            name="service"
            value={formData.service}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                service: event.target.value as ServiceType
              }))
            }
            className="field-glass px-4 py-3 text-foreground outline-none transition focus:border-accent/40 focus:ring-2 focus:ring-accent/20"
          >
            <option value="Вікна">Вікна</option>
            <option value="Кондиціонери">Кондиціонери</option>
            <option value="Комплекс">Комплекс</option>
          </select>
          {fieldErrors.service ? (
            <span className="text-xs text-rose-600">{fieldErrors.service}</span>
          ) : null}
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="glass-button h-[56px] min-w-[220px]"
          style={{ ["--button-tint" as string]: "#18a59a" }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Надсилання..." : "Розрахувати вартість"}
        </button>
        <p className={`text-sm leading-6 ${statusClasses}`}>{message || "Відповідаємо протягом 15 хвилин."}</p>
      </div>
    </form>
  );
}
