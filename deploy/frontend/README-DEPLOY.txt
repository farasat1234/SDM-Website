SDM FRONTEND — HOSTINGER DEPLOY NOTES
=======================================

WHAT THIS IS
This folder is the Next.js marketing site only. Deploy it as its own
"Web App" in Hostinger, separate from the backend.

BEFORE ZIPPING
- Do NOT include a real .env.local file in the zip. Set
  NEXT_PUBLIC_BACKEND_URL in Hostinger's environment variable settings for
  this app instead.
- Do NOT include node_modules or .next — Hostinger will run "npm install"
  and "npm run build" itself.

BUILD COMMAND
  npm run build

START COMMAND
  npm start
  (runs "next start" — see package.json)

REQUIRED ENVIRONMENT VARIABLES (set in Hostinger dashboard, not in a file)
  NEXT_PUBLIC_BACKEND_URL -> the LIVE backend URL from the backend deploy,
                              e.g. https://whitesmoke-termite-303399.hostingersite.com
                              (must include https:// and NO trailing slash)

  IMPORTANT: NEXT_PUBLIC_* variables are baked in at BUILD time, not read at
  runtime. If you change NEXT_PUBLIC_BACKEND_URL after the first deploy, you
  must trigger a fresh build/redeploy — restarting the app alone is not
  enough for the new value to take effect.

DEPLOY ORDER
  1. Deploy the backend FIRST and get its live URL.
  2. Set NEXT_PUBLIC_BACKEND_URL to that URL for this frontend app, THEN
     deploy/build the frontend.
  3. In the backend's env vars, set FRONTEND_URL to this frontend's live URL
     (systemdiesandmoulds.com) and redeploy/restart the backend.

AFTER DEPLOY
- Visit the live site, submit the contact form, and try the chatbot widget
  to confirm both reach the backend successfully (check browser console for
  CORS or network errors if not).
- Confirm https://systemdiesandmoulds.com/sitemap.xml and /robots.txt load
  correctly, then submit the sitemap in Google Search Console.

NOTE ON SIZE
This folder includes frontend/public (~237 MB of project photos/logos).
Zipping and uploading may be slow. If Hostinger has an upload size limit,
you may need to compress images or split the upload.

WHAT'S NEW IN THIS REFRESH (vs earlier zips)
- Case-sensitivity fixes for OurProjects image paths (was breaking on Linux)
- Phone/WhatsApp number updated to 0333-5499004
- Industries list updated (Chemical & Process / Oil & Gas removed, Pharma added)
- All emoji icons replaced with react-icons components
- Housepipe folder renamed to "CompsitPlastic&Hosepipe" with new/updated photos
- JIG & Fixure folder: added CNC Fixture, Fixture Assembly, Jigs and Fisture,
  Modular Fixture; Rear Tailgate re-added as .jpg; Logofixture updated
- SEO: meta keywords + descriptions added to all pages, LocalBusiness JSON-LD
  structured data added to homepage, sitemap.xml + robots.txt added
