SDM BACKEND — HOSTINGER DEPLOY NOTES
=====================================

WHAT THIS IS
This folder is the Express API only (contact form + chatbot). Deploy it as
its own "Web App" in Hostinger, separate from the frontend.

BEFORE ZIPPING
- Do NOT include a real .env file in the zip. Secrets go into Hostinger's
  environment variable settings for this app (in hPanel, after you create
  the Web App), not into the uploaded files.
- Do NOT include node_modules — Hostinger will run "npm install" itself
  after upload (based on package.json).

START COMMAND (set this in Hostinger's Web App config)
  npm start
  (runs "node server.js" — see package.json)

ENTRY POINT
  server.js

REQUIRED ENVIRONMENT VARIABLES (set in Hostinger dashboard, not in a file)
  SMTP_HOST         -> smtp.gmail.com
  SMTP_PORT         -> 587
  SMTP_USER         -> your Gmail address used to send mail
  SMTP_PASS         -> Gmail App Password (16 chars, no spaces) — generate at
                        https://myaccount.google.com/apppasswords (requires
                        2-Step Verification enabled on that Gmail account)
  FEEDBACK_EMAIL    -> inbox that should receive contact-form/chat-lead emails
  FRONTEND_URL      -> the LIVE frontend URL (e.g. https://systemdiesandmoulds.com)
                        — required for CORS to allow the frontend to call this
                        API. Using the wrong value here is the #1 cause of
                        "contact form doesn't work in production" (CORS block).

  Do not set PORT — Hostinger assigns/injects it, and server.js already
  respects process.env.PORT.

AFTER DEPLOY
1. Confirm the health check works: GET https://<your-backend-url>/health
   should return { "status": "SDM backend running" }
2. Note the backend's live URL — you need to paste it into the FRONTEND
   deploy as NEXT_PUBLIC_BACKEND_URL (see frontend/README-DEPLOY.txt).
3. Test the contact form and chatbot on the live frontend once both are up.
