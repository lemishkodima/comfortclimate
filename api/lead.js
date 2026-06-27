function formatTimestamp() {
  return new Date().toISOString();
}

function getAppsScriptConfig() {
  const webhookUrl =
    process.env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL ||
    "https://script.google.com/macros/s/AKfycbykio-tjuaUBzbuFmwqbnrnl2jRdp_KKiwCCgGcjXjgxhyW5-D00fpmpuL32AS-sr8_Bw/exec";
  const secret = process.env.GOOGLE_APPS_SCRIPT_SECRET || "";

  if (!webhookUrl) {
    return null;
  }

  return { webhookUrl, secret };
}

async function sendToAppsScript(payload) {
  const config = getAppsScriptConfig();
  if (!config) {
    return { delivered: false, reason: "apps_script_env_missing" };
  }

  const response = await fetch(config.webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...payload,
      ...(config.secret ? { webhook_secret: config.secret } : {})
    })
  });

  const responseText = await response.text();
  let responseData = null;

  try {
    responseData = responseText ? JSON.parse(responseText) : null;
  } catch (error) {
    responseData = null;
  }

  if (!response.ok) {
    throw new Error(`apps_script_failed:${response.status}:${responseText}`);
  }

  return {
    delivered: true,
    response: responseData
  };
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "method_not_allowed" });
    return;
  }

  const payload = req.body || {};
  if (!payload.phone || !payload.mode) {
    res.status(400).json({ ok: false, error: "validation_error" });
    return;
  }

  console.log(
    JSON.stringify({
      type: "lead_backup",
      createdAt: formatTimestamp(),
      payload
    })
  );

  try {
    const appsScript = await sendToAppsScript(payload);
    res.status(200).json({ ok: true, appsScript });
  } catch (error) {
    console.error("apps_script_delivery_error", error);
    res.status(500).json({
      ok: false,
      error: "apps_script_delivery_failed"
    });
  }
};
