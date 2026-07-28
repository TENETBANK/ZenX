# ZenX Corporate Site — MVP

A production-ready static site for **ZenX Limited** (BVI). Built to be deployed in under 10 minutes, with zero backend dependencies.

---

## 📁 Project Structure

```
zenx-mvp/
├── index.html           # Home (hero · three pillars · RealFinance featured · compliance)
├── about.html           # About (story · pillars · RealFinance · entity)
├── compliance.html      # Compliance & Governance (legal · issuance · custody · docs)
├── contact.html         # Contact (form + direct channels)
└── assets/
    ├── css/style.css    # Full design system (tokens + components + responsive)
    └── js/main.js       # Mobile nav · smooth scroll · form handler · reveal animations
```

**Total size: ~67 KB** (before fonts). Loads in <1s on any modern host.

---

## 🎨 Brand Tokens (in `style.css`)

```css
--green:  #1B4332    /* Deep Forest — primary */
--gold:   #B89968    /* Antique Gold — accent */
--bg:     #FAF6EE    /* Warm Ivory — canvas */
--bg-card: #F2EBD9    /* Linen — surface */
--serif:  "Cormorant Garamond"  /* Display */
--sans:   "Inter"               /* Body */
--mono:   "JetBrains Mono"      /* Eyebrows, labels */
```

All values are defined as CSS custom properties in `:root` — change once, updates everywhere.

---

## 🚀 Deployment — Pick One (all free)

### Option A · Vercel (recommended — 60 seconds)
1. Push this folder to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new) → import the repo
3. Framework: **"Other"** · Click **Deploy**
4. ✅ Done — you'll get a `https://zenx-mvp.vercel.app` URL

### Option B · Cloudflare Pages (fastest, free CDN)
1. Push to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com) → **Create a project** → **Connect to Git**
3. Build command: *(leave empty)* · Build output: `/`
4. ✅ Done

### Option C · Netlify Drop (no Git needed)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `zenx-mvp/` folder onto the page
3. ✅ Done — instant URL

### Option D · GitHub Pages
1. Push to GitHub
2. Repo → **Settings** → **Pages** → Source: `main` branch / root
3. ✅ Live at `https://<username>.github.io/<repo>/`

---

## 🔧 Pre-Launch Checklist

Before going live, update these placeholders:

| What | Where | Change to |
|---|---|---|
| Domain | `index.html`, `about.html`, `compliance.html`, `contact.html` | Replace all `https://realfinance.app` with the actual RealFinance URL once live |
| Contact emails | `contact.html` | `institutional@zenx.io`, `partners@zenx.io`, `press@zenx.io` |
| Hero metrics | `index.html` | `$1.2B+`, `6 partners` — update to real numbers |
| Form backend | `contact.html` + `main.js` | See **Form Handling** below |
| Favicon | `<link rel="icon">` in `<head>` | Optional — already has a ZenX "Z" SVG |
| Open Graph image | Add `<meta property="og:image">` | 1200×630 brand banner |

---

## 📬 Form Handling

The contact form in `contact.html` currently shows a success message locally. To actually deliver emails, pick one:

**Easiest (free, ~5 min):** [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com)
- Sign up · get an endpoint · replace the form's submit handler in `main.js`:

```js
form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const data = new FormData(form);
  const res = await fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  });
  if (res.ok) {
    form.querySelector('.form-success').classList.add('is-shown');
    form.reset();
  }
});
```

**Self-hosted:** Pipe to a serverless function (Vercel Functions, Cloudflare Workers) or send directly to your SMTP via [EmailJS](https://www.emailjs.com).

---

## 🔗 RealFinance Association — Built In

RealFinance is integrated across all 4 pages as a flagship partner. No edits needed; just confirm the target URL.

| Page | Touchpoint | Link target |
|---|---|---|
| Home | Nav bar — "Platforms: RealFinance ↗" | `#adoption` (case study section) |
| Home | Trust strip — RealFinance logo (active) | https://realfinance.app (external) |
| Home | Case study card — "Visit RealFinance" | https://realfinance.app (external) |
| About | Nav bar + case study + footer | (same as above) |
| Compliance | In-text mention ("such as RealFinance") | https://realfinance.app (external) |
| Contact | Sidebar note ("Already using RealFinance?") | https://realfinance.app (external) |
| All | Footer — "Platforms: RealFinance" | https://realfinance.app (external) |

**7 touchpoints** — exceeds the 6-point plan in the original spec because we also exposed RealFinance from the Contact page (high-intent visitors).

---

## 🌐 Adding a Custom Domain

Once deployed on Vercel / Cloudflare / Netlify:
1. Buy `zenx.io` (or your preferred domain) on Namecheap / Cloudflare Registrar
2. In your host's dashboard: **Settings → Domains → Add custom domain**
3. Update the DNS records they give you
4. ✅ HTTPS auto-provisioned within minutes

---

## 🛠 Local Preview

Just open `index.html` in your browser. No build step, no server needed.

For a more accurate preview with proper routing:
```bash
# Python 3
python3 -m http.server 8000
# Then visit http://localhost:8000
```

---

## 📝 Content Notes

- **All copy is English by default.** The site targets international institutional audiences. If you need a Chinese version, see the next step below.
- **Legal copy** on the Compliance page is paraphrased from the actual ZenX Token Whitepaper (Schedule 2) and the Token Purchase Agreement — these are the source of truth and should be reviewed by counsel before any go-live.
- **Hero metrics** ($1.2B+ · 6 partners) are placeholders to be replaced with verified numbers.

---

## 🚧 Future Enhancements (Not in MVP)

These are deliberately out of scope but easy to add later:

- [ ] Chinese / multilingual version
- [ ] CMS integration (Sanity / Contentful) for the Insights / News section
- [ ] Document vault with NDA-gated Whitepaper / Token Purchase Agreement downloads
- [ ] White-label partner pages (e.g. `/platforms/realfinance` deep-dive)
- [ ] Analytics (Plausible / Fathom — privacy-friendly, no cookie banner needed)
- [ ] Real og:image and twitter:card metadata
- [ ] Subtle scroll-triggered animations beyond the current reveal

---

**Built for fast deploy. Built to be a real institutional site, not a placeholder.**
