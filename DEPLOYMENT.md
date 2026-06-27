# Vercel Deploy

## What is already prepared

- static landing pages
- serverless endpoint: `api/lead.js`
- Vercel config: `vercel.json`
- env template: `.env.example`

## Before deploy

In Vercel Project Settings -> Environment Variables add:

- `GOOGLE_APPS_SCRIPT_WEBHOOK_URL`
- `GOOGLE_APPS_SCRIPT_SECRET`

Use the same secret as `WEBHOOK_SECRET` in Google Apps Script.

## Deploy steps

1. Import the project into Vercel.
2. Framework preset: `Other`.
3. Root directory: project root.
4. Add env variables from above.
5. Deploy.

## Notes

- `index.html` is served as the landing root.
- `/windows/` and `/conditioners/` work as separate entry points.
- `/api/lead` works as a Vercel serverless function.
- If `GOOGLE_APPS_SCRIPT_WEBHOOK_URL` is missing in Vercel, the fallback URL from code will still be used.
