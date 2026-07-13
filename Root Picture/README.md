# SDM — System Dies and Mould Website

Professional website with Next.js frontend, Node.js/Express backend, AI chatbot, and email feedback.

---

## Prerequisites

1. Install **Node.js** from https://nodejs.org (LTS version recommended)
2. After install, restart your terminal/PowerShell

---

## Setup & Run

### Step 1 — Backend

```powershell
cd C:\SDM_Web\backend
npm install
```

Edit `.env` and fill in your Gmail credentials:
```
SMTP_USER=your_gmail@gmail.com
SMTP_PASS=your_16_char_app_password   # Gmail App Password (not your login password)
```

> To create a Gmail App Password: Google Account → Security → 2-Step Verification → App Passwords

Start the backend:
```powershell
npm run dev      # development (auto-restart on changes)
# or
npm start        # production
```

Backend runs at: http://localhost:5000

---

### Step 2 — Frontend

```powershell
cd C:\SDM_Web\frontend
npm install
npm run dev
```

Frontend runs at: http://localhost:3000

---

## Features

- **Full SDM-branded site** — Navy/gold theme matching SDM logo
- **Chatbot** — Floating chat bubble (bottom-right), answers questions about services, location, contact, pricing
- **WhatsApp button** — Direct link to 0331-2134341
- **Contact form** — Sends enquiry email to info@systemdiesandmould.com
- **Chat feedback** — Each chat message summary emailed to info@systemdiesandmould.com
- **Responsive** — Works on mobile, tablet, desktop

---

## Contact Details on Site

- Director: Farasat Karim
- Phone: 0331-2134341
- Email: c47.sdm@gmail.com
- Address: C-47, SITE, Super Highway, Karachi
- Feedback email: info@systemdiesandmould.com
