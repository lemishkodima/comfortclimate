const TELEGRAM_API_BASE = "https://api.telegram.org";

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || "{}");
    validateWebhookSecret_(payload);
    validatePayload_(payload);

    const spreadsheet = SpreadsheetApp.openById(getRequiredProperty_("SPREADSHEET_ID"));
    const sheet = getTargetSheet_(spreadsheet, payload.mode);
    const row = buildSheetRow_(payload);
    sheet.appendRow(row);

    const telegramResult = sendToTelegram_(payload);

    return jsonResponse_({
      ok: true,
      sheet: sheet.getName(),
      telegram: telegramResult
    });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      error: error.message || "unknown_error"
    });
  }
}

function validateWebhookSecret_(payload) {
  const expectedSecret = PropertiesService.getScriptProperties().getProperty("WEBHOOK_SECRET");
  if (!expectedSecret) return;

  const receivedSecret = payload && payload.webhook_secret ? payload.webhook_secret : "";

  if (receivedSecret !== expectedSecret) {
    throw new Error("invalid_webhook_secret");
  }
}

function validatePayload_(payload) {
  if (!payload || !payload.phone || !payload.mode) {
    throw new Error("validation_error");
  }
}

function getTargetSheet_(spreadsheet, mode) {
  const sheetName = mode === "conditioners" ? "Conditioners" : "Windows";
  const sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    throw new Error("sheet_not_found_" + sheetName);
  }

  return sheet;
}

function buildSheetRow_(payload) {
  return [
    new Date(),
    getDirectionLabel_(payload.mode),
    payload.name || "",
    payload.phone || "",
    payload.service || "",
    payload.details || payload.quiz_answer || "",
    payload.district || payload.area || "",
    payload.utm_source || "",
    payload.utm_campaign || "",
    payload.utm_medium || "",
    payload.gclid || "",
    payload.landing_url || "",
    payload.entry_url || ""
  ];
}

function getDirectionLabel_(mode) {
  return mode === "conditioners" ? "Кондиціонери" : "Вікна";
}

function sendToTelegram_(payload) {
  const token = PropertiesService.getScriptProperties().getProperty("TELEGRAM_BOT_TOKEN");
  const chatId = PropertiesService.getScriptProperties().getProperty("TELEGRAM_CHAT_ID");

  if (!token || !chatId) {
    return { delivered: false, reason: "telegram_env_missing" };
  }

  const response = UrlFetchApp.fetch(
    TELEGRAM_API_BASE + "/bot" + token + "/sendMessage",
    {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify({
        chat_id: chatId,
        text: formatTelegramMessage_(payload),
        parse_mode: "HTML",
        disable_web_page_preview: true
      }),
      muteHttpExceptions: true
    }
  );

  const statusCode = response.getResponseCode();
  if (statusCode < 200 || statusCode >= 300) {
    throw new Error("telegram_failed_" + statusCode + ":" + response.getContentText());
  }

  return { delivered: true };
}

function formatTelegramMessage_(payload) {
  const source =
    [payload.utm_source, payload.utm_campaign].filter(Boolean).join(" / ") ||
    "не вказано";
  const comment = payload.details || payload.quiz_answer || "не вказано";
  const area = payload.district || payload.area || "не вказано";
  const phone = String(payload.phone || "не вказано").trim();
  const phoneHref = formatPhoneHref_(phone);

  return [
    "🏠 Нова заявка — Comfort Climate",
    "Напрям: " + escapeHtml_(getDirectionLabel_(payload.mode)),
    "Ім'я: " + escapeHtml_(payload.name || "не вказано"),
    'Телефон: <a href="tel:' + escapeHtml_(phoneHref) + '">' + escapeHtml_(phone) + "</a>",
    "Послуга: " + escapeHtml_(payload.service || "не вказано"),
    "Запит: " + escapeHtml_(comment),
    "Місто / район: " + escapeHtml_(area),
    "Час: " + escapeHtml_(new Date().toISOString()),
    "Джерело: " + escapeHtml_(source),
    "UTM Medium: " + escapeHtml_(payload.utm_medium || "не вказано"),
    "GCLID: " + escapeHtml_(payload.gclid || "немає"),
    "Сторінка входу: " + escapeHtml_(payload.landing_url || "невідомо"),
    "Referrer: " + escapeHtml_(payload.entry_url || "невідомо")
  ].join("\n");
}

function formatPhoneHref_(phone) {
  if (!phone) return "невказано";
  return phone.indexOf("+") === 0 ? phone : "+" + phone.replace(/[^\d]/g, "");
}

function escapeHtml_(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getRequiredProperty_(key) {
  const value = PropertiesService.getScriptProperties().getProperty(key);
  if (!value) {
    throw new Error("missing_property_" + key);
  }
  return value;
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
