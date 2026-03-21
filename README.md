# Personal Finance Tools

A collection of 15 free, client-side personal finance calculators built for Indian investors and salaried professionals. No server, no login, no data collection — everything runs entirely in the browser.

🌐 **Live site:** `https://YOUR_USERNAME.github.io/personal/`

---

## Calculators

| # | Calculator | File | Description |
|---|-----------|------|-------------|
| 1 | **LTCG Tax Harvesting** | `sip-ltcg-tax-harvesting-calculator.html` | Upload Zerodha tradebook to generate a FIFO lot-wise sell plan that maximises the ₹1.25L LTCG exemption |
| 2 | **EMI Calculator** | `emi-calculator.html` | Month-by-month amortization with prepayment savings and yearly summary |
| 3 | **FD Calculator** | `fd-calculator.html` | Fixed deposit with monthly/quarterly/cumulative payout, TDS impact, post-tax returns at all slabs |
| 4 | **Take Home Salary** | `salary-calculator.html` | CTC breakdown, New vs Old regime comparison, HRA exemption, 80C/D/NPS deductions, monthly in-hand |
| 5 | **SIP Calculator** | `sip-calculator.html` | SIP and Lump Sum projections with year-wise table and compare mode |
| 6 | **PPF Calculator** | `ppf-calculator.html` | 15-year schedule, loan eligibility (years 3–6), partial withdrawal (year 7+), extension projections |
| 7 | **RD Calculator** | `rd-calculator.html` | Recurring deposit with quarterly/monthly/annual compounding, bank presets, RD vs FD comparison |
| 8 | **NPS Calculator** | `nps-calculator.html` | NPS corpus projection, 80CCD(1)/(1B) tax savings, lump sum + annuity split at retirement |
| 9 | **Retirement Planner** | `retirement-planner.html` | Inflation-adjusted corpus planner, SIP needed, post-retirement withdrawal simulation |
| 10 | **Capital Gains Tax** | `capital-gains-calculator.html` | LTCG/STCG for equity, debt MF, real estate (CII indexation), gold — FY 2025-26 rules |
| 11 | **GST Calculator** | `gst-calculator.html` | Add/Remove GST at 5/12/18/28%, CGST+SGST vs IGST split, all-slab reference table |
| 12 | **Gratuity Calculator** | `gratuity-calculator.html` | Act-covered, non-covered and government formulas, eligibility check, ₹20L tax exemption |
| 13 | **Inflation Calculator** | `inflation-calculator.html` | Future cost, present value, and real return (Fisher equation) in one tool |
| 14 | **Loan vs Invest** | `loan-vs-invest.html` | Prepay loan vs invest surplus — interest saved vs SIP corpus, year-wise comparison, break-even rate |
| 15 | **Percentage Calculator** | `percentage-calculator.html` | 9 quick tools: % of, % change, add/remove %, markup/margin, CAGR, tip split, and more |

---

## Features

### LTCG Tax Harvesting (flagship)
- Upload **Zerodha XLSX/CSV** tradebook — parsed entirely in the browser
- **FIFO lot matching** across multiple financial years
- Accordion lot-wise plan grouped by stock with expand/collapse
- **Portfolio Summary** table — sortable, filterable (search, chips, gain% range)
- **Sell Planner** — select stocks via checkbox, adjust sell qty per stock, live P&L summary
- **Portfolio Charts** — invested vs value bars, allocation donut, LTCG gauge
- Export harvest plan as CSV
- Supports partial-lot selling when limit is nearly filled

### FD Calculator
- Monthly, Quarterly, Cumulative and Year-summary tabs
- **Tenure modes**: Years+Months, Total Months, or **Days** (with presets: 300d, 444d, 777d…)
- **Payout frequency card** — shows gross and net (after TDS) for all 4 frequencies at once
- Form 15G/15H toggle, 10%/20% TDS rates
- Post-tax maturity at 5 different slab rates side-by-side

### Take Home Salary
- Basic % slider, HRA city toggle, variable pay, professional tax
- New Regime FY26 — ₹75K std deduction, 87A rebate ≤ ₹12L
- Old Regime — HRA exemption, 80C (₹1.5L), 80D, NPS 80CCD(1B)
- Monthly in-hand breakdown with CTC bar chart

### General
- **Dark / Light theme** toggle (persists via `localStorage`)
- Fully **client-side** — no backend, no API calls, no data leaves the browser
- Responsive layout — works on mobile
- Google Fonts via CDN (DM Sans + JetBrains Mono)

---

## Tax Rules (FY 2025-26)

| Tax Head | Rate | Notes |
|----------|------|-------|
| Equity LTCG | 12.5% | Above ₹1.25L exemption, held > 12 months |
| Equity STCG | 20% | Held ≤ 12 months |
| Debt MF | Slab rate | No indexation benefit post April 2023 |
| Real Estate LTCG | 12.5% | CII indexation available, held > 24 months |
| Gold LTCG | 12.5% | Held > 36 months |
| FD Interest | Slab rate | TDS 10% if interest > ₹40K/yr (₹50K senior) |
| New Regime std deduction | ₹75,000 | FY 2025-26 |
| 87A rebate | Full tax | Taxable income ≤ ₹12L (new regime) |
| PPF | EEE | Exempt at investment, accrual, and maturity |
| NPS lump sum (60%) | Tax-free | At retirement |
| Gratuity cap | ₹20L | Tax-exempt limit |

---

## Project Structure

```
personal/
├── index.html                          # Home page — links to all calculators
├── theme.js                            # Dark/light theme toggle (shared)
├── sip-ltcg-tax-harvesting-calculator.html
├── emi-calculator.html
├── fd-calculator.html
├── salary-calculator.html
├── sip-calculator.html
├── ppf-calculator.html
├── rd-calculator.html
├── nps-calculator.html
├── retirement-planner.html
├── capital-gains-calculator.html
├── gst-calculator.html
├── gratuity-calculator.html
├── inflation-calculator.html
├── loan-vs-invest.html
├── percentage-calculator.html
└── README.md
```

---

## Tech Stack

- **Vanilla HTML / CSS / JavaScript** — zero frameworks, zero dependencies
- **SheetJS (xlsx)** — in-browser Excel/CSV parsing (LTCG calculator only, loaded via CDN)
- **Canvas 2D API** — custom chart drawing (bar, donut, gauge)
- **CSS custom properties** — full dark/light theming via `data-theme` attribute
- **localStorage** — persists theme preference across sessions

---

## Running Locally

No build step needed. Just open any file directly in a browser:

```bash
# Option 1 — open directly
start e:/php8/htdocs/personal/index.html

# Option 2 — serve with Python (avoids any CORS issues)
cd e:/php8/htdocs/personal
python -m http.server 8080
# then visit http://localhost:8080
```

---

## Deploying to GitHub Pages

```bash
cd e:/php8/htdocs/personal
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

Then in the repo → **Settings → Pages → Deploy from branch → main / root → Save**.

Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME/` within ~2 minutes.

---

## Live Stock Price Fetching (LTCG Calculator)

The LTCG calculator fetches NSE live prices via Yahoo Finance. Because Yahoo Finance blocks direct browser requests (CORS), a **Cloudflare Worker** is the most reliable solution.

### Setup (free, 3 minutes)

1. Sign up at [dash.cloudflare.com](https://dash.cloudflare.com) (free)
2. Go to **Workers & Pages → Create → Create Worker**
3. Replace the default code with:

```javascript
export default {
  async fetch(request) {
    const { searchParams } = new URL(request.url);
    const target = searchParams.get('url');
    if (!target) return new Response('Missing url', { status: 400 });
    const resp = await fetch(target, {
      headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json' }
    });
    const body = await resp.text();
    return new Response(body, {
      headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }
    });
  }
}
```

4. Click **Deploy** — copy the worker URL (e.g. `https://stock-proxy.yourname.workers.dev`)
5. Open `sip-ltcg-tax-harvesting-calculator.html` and set:

```javascript
const CF_WORKER_URL = 'https://stock-proxy.yourname.workers.dev';
```

Without the worker, the calculator falls back to 4 public CORS proxies automatically, but those can be unreliable.

---

## Disclaimer

All calculations are **indicative only**. Tax rules and rates change annually — always verify with a qualified Chartered Accountant before making financial decisions. This tool does not constitute financial or tax advice.

---

## License

MIT — free to use, modify, and distribute.
