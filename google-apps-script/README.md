# Google Apps Script Setup

## 1. Google Sheet

Create one spreadsheet with two tabs:

- `Windows`
- `Conditioners`

Recommended columns:

1. `created_at`
2. `direction`
3. `name`
4. `phone`
5. `service`
6. `details`
7. `area`
8. `utm_source`
9. `utm_campaign`
10. `utm_medium`
11. `gclid`
12. `landing_url`
13. `entry_url`

## 2. Apps Script

1. Open the spreadsheet.
2. Go to `Extensions -> Apps Script`.
3. Paste code from [lead-webhook.gs](/Users/mac/Documents/Project/wincool/google-apps-script/lead-webhook.gs).
4. In `Project Settings -> Script Properties`, add:

- `SPREADSHEET_ID`
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `WEBHOOK_SECRET` optional but recommended

## 3. Deploy

1. Click `Deploy -> New deployment`.
2. Type: `Web app`.
3. Execute as: `Me`.
4. Who has access: `Anyone`.
5. Copy the Web App URL.

## 4. Website env

Set these variables for the site/backend:

- `GOOGLE_APPS_SCRIPT_WEBHOOK_URL`
- `GOOGLE_APPS_SCRIPT_SECRET` optional but recommended

## 5. Notes

- `api/lead.js` sends all form data to the Apps Script webhook.
- Apps Script writes the lead to `Windows` or `Conditioners` based on `mode`.
- Apps Script also sends a Telegram notification.
