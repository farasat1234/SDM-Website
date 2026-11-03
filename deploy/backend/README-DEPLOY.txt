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
  SMTP_HOST         -> smtp.hostinger.com
  SMTP_PORT         -> 465
  SMTP_USER         -> info@systemdiesandmoulds.com
  SMTP_PASS         -> the mailbox password for info@systemdiesandmoulds.com
                        (set when the mailbox was created in Hostinger's
                        Emails panel — NOT a Gmail App Password, this
                        mailbox is hosted on Hostinger's own mail servers)
  FEEDBACK_EMAIL    -> info@systemdiesandmoulds.com (inbox that receives
                        contact-form/chat-lead emails — can be the same
                        address as SMTP_USER)
  FRONTEND_URL      -> the LIVE frontend URL (e.g. https://systemdiesandmoulds.com)
                        — required for CORS to allow the frontend to call this
                        API. Using the wrong value here is the #1 cause of
                        "contact form doesn't work in production" (CORS block).

  Do not set PORT — Hostinger assigns/injects it, and server.js already
  respects process.env.PORT.

  NOTE: emailService.js now derives TLS mode automatically from the port
  (port 465 = implicit SSL, anything else = STARTTLS), so SMTP_PORT=465
  will correctly use SSL without any other code changes needed.

AFTER DEPLOY
1. Confirm the health check works: GET https://<your-backend-url>/health
   should return { "status": "SDM backend running" }
2. Check Hostinger's Runtime Logs for this app — on startup it should print
   "Email transporter ready — sending to: info@systemdiesandmoulds.com".
   If it instead prints "Email config error", the SMTP_PASS value is wrong —
   double-check it exactly matches the mailbox password in hPanel > Emails.
3. Note the backend's live URL — you need to paste it into the FRONTEND
   deploy as NEXT_PUBLIC_BACKEND_URL (see frontend/README-DEPLOY.txt).
4. Test the contact form and chatbot on the live frontend once both are up.
