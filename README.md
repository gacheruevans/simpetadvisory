# Simpet Advisory — Official Web Platform

> **"Empowering People. Strengthening Businesses."**  
> Professional accounting, statutory tax consultancy, outsourced audit services, staff financial empowerment training, and Authorized Zoho Books Cloud ERP implementation in Nairobi, Kenya.

---

## 📌 Executive Summary

**Simpet Advisory** is a boutique financial consulting and systems modernization practice headquartered in the Nairobi Central Business District. Led by Managing Director **Catherine Mwangi**, the firm bridges the gap between rigorous technical accounting and human workplace empowerment.

The web platform is built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**, engineered for high performance, accessibility, search engine visibility, and seamless customer inquiry conversion.

---

## 🏢 Company Profile

| Attribute | Details |
| :--- | :--- |
| **Organization Name** | Simpet Advisory |
| **Leadership** | Catherine Mwangi (Managing Director & Lead Consultant) |
| **Physical Address** | Temple Road, behind Ronald Ngala Post Office, Nairobi, Kenya |
| **Postal Address** | P.O. Box 35696-00100, Nairobi, Kenya |
| **Primary Telephone** | [`0773 100 577`](tel:+254773100577) (`+254 773 100 577`) |
| **Secondary Telephone** | [`0750 371 381`](tel:+254750371381) (`+254 750 371 381`) |
| **WhatsApp Inquiries** | [`+254 773 100 577`](https://wa.me/254773100577) |
| **Official Email** | [info@simpetadvisory.com](mailto:info@simpetadvisory.com) |
| **Operating Hours** | Monday – Friday: 8:00 AM – 5:00 PM EAT \| Saturday: By Appointment |

---

## 🎯 Core Consulting Practices

1. **Accounting & Financial Management**
   - End-to-end bookkeeping and general ledger maintenance.
   - Monthly profit & loss, balance sheet, and statement of cash flows.
   - Working capital management and operational budget forecasting.
   - Tailored executive financial reporting for directors and stakeholders.

2. **Tax & Statutory Consultancy**
   - Complete Kenya Revenue Authority (**KRA**) statutory filing management.
   - Monthly Value Added Tax (**VAT**), **PAYE**, **Housing Levy**, and statutory deductions (**NSSF**, **SHIF/NHIF**, **NITA**).
   - Annual Corporate Income Tax computations, returns, and installment tax planning.
   - KRA iTax reconciliations, eTIMS onboarding, tax health checks, and desk audit defense.

3. **Outsourced Audit Services**
   - Independent operational and internal controls evaluation.
   - Year-end external audit preparation and reconciliation schedules.
   - Governance risk assessment and financial compliance reviews.
   - Audit action plans and executive remediation roadmaps.

4. **Staff Training & Financial Empowerment**
   - Workplace corporate financial wellness masterclasses (budgeting, debt elimination, savings strategies, and retirement planning).
   - Finance for Non-Financial Managers and department leaders.
   - Keynote empowerment and motivational talks for corporate retreats, AGMs, and conferences led by **Catherine Mwangi**.

5. **Zoho Books & Cloud ERP Consultancy**
   - **Official Authorized Zoho Partner** in Kenya.
   - Chart of accounts design, automated invoicing, customer portals, and vendor bill workflows.
   - Historical ledger data migration from Excel, QuickBooks, or legacy desktop systems.
   - Hands-on user training and ongoing ERP advisory retainers.

---

## 🚀 Key Platform Features

* **Tailored Visitor Journeys**: Dedicated entry pathways for corporate HR/learning teams, event/conference organizers, and SME business owners.
* **Full-Stack Consultation Request Engine**:
  - Secure `/api/enquire` route handler with in-memory sliding-window rate limiting.
  - Invisible honeypot anti-spam defense (zero invasive CAPTCHAs for legitimate users).
  - Progressive conditional inputs based on selected consulting practice.
  - Deterministic reference code generation (e.g., `SA-9X2K4A`) for easy client follow-up.
* **Optimal Typography & Readability**:
  - Custom `.text-md` token (`1.0625rem` / `17px` with relaxed `1.68` line-height) applied across all descriptions, bullet points, and explanatory paragraphs.
* **Dual Branding & Verified Credibility**:
  - Official high-contrast colorful **Zoho Partner** logo on light practice cards and crisp monochrome white logo on dark hero headers.
  - Official **Kenya Revenue Authority (KRA)** logo for statutory tax confidence.
* **Comprehensive Technical SEO**:
  - Dynamic OpenGraph and Twitter cards with localized metadata (`en_KE`).
  - Automated XML sitemap generation at `/sitemap.xml`.
  - Canonical URLs on every route and compliant `/robots.txt`.
* **Responsive & Accessible**:
  - Mobile-first drawer navigation with persistent click-to-call telephone actions.
  - High-contrast color palette: Deep Navy (`#12243A`), Brand Teal (`#0F766E`), and Warm Gold (`#C89B3C`).
  - Strict WCAG AAA/AA color contrast compliance and accessible focus indicators.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) 16.4.3 (App Router with Turbopack) |
| **Library** | [React](https://react.dev/) 19.0.0 |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) v4 |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | Inter (via `next/font/google`) |
| **Linter** | ESLint 9 |

---

## 📁 Repository Structure

```text
simpetadvisory/
├── .agents/                    # Antigravity specialized skill definitions
│   └── skills/
│       ├── expert-ui-ux/       # UI/UX design & accessibility workflows
│       └── senior-software-engineer/ # Architecture & code standards
├── public/                     # Static assets & brand media
│   └── images/
│       ├── kra-logo.png        # Official Kenya Revenue Authority badge
│       ├── zoho-logo.png       # Official Zoho Partner white monochrome logo
│       ├── zoho-logo-color.png # Official colorful Zoho vector logo
│       └── zoho-logo-color.svg # Scalable SVG vector source
├── src/
│   ├── app/                    # Next.js App Router routes & endpoints
│   │   ├── about/page.tsx      # Company story, philosophy & Catherine Mwangi bio
│   │   ├── api/enquire/route.ts# Consultation inquiry API with rate-limiting & validation
│   │   ├── contact/page.tsx    # Interactive consultation booking & Nairobi office info
│   │   ├── privacy/page.tsx    # Data protection & confidentiality policy
│   │   ├── services/
│   │   │   ├── [slug]/page.tsx # Dynamic detail pages for the 5 practices
│   │   │   └── page.tsx        # Comprehensive services catalog
│   │   ├── thank-you/page.tsx  # Confirmation screen with inquiry reference ID
│   │   ├── not-found.tsx       # Custom branded 404 page
│   │   ├── robots.txt/route.ts # Dynamic robots.txt
│   │   ├── sitemap.xml/route.ts# Dynamic sitemap index
│   │   ├── layout.tsx          # Root layout shell with Inter font & SEO metadata
│   │   ├── globals.css         # Design system tokens & typography utilities
│   │   └── page.tsx            # High-conversion homepage
│   ├── components/
│   │   ├── forms/
│   │   │   └── EnquiryForm.tsx # Client-side validated form with progressive fields
│   │   ├── home/
│   │   │   └── FaqSection.tsx  # Interactive accordion FAQ component
│   │   └── layout/
│   │       ├── Header.tsx      # Responsive header with megamenu & mobile drawer
│   │       └── Footer.tsx      # Comprehensive site footer & office credentials
│   └── content/
│       ├── company.ts          # Central source of truth for company & service data
│       └── services-detail.ts  # Deep deliverables, roadmap & FAQ data per service
├── .env.example                # Template for environment configuration
├── implementation.md           # Implementation blueprint & requirements specification
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and script definitions
├── tsconfig.json               # TypeScript compiler options
└── README.md                   # Project documentation
```

---

## ⚡ Getting Started

### 1. Prerequisites
- **Node.js**: v18.18.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher

### 2. Installation
Clone the repository and install project dependencies:

```bash
git clone git@github.com:gacheruevans/simpetadvisory.git
cd simpetadvisory
npm install
```

### 3. Environment Variables
Create your local environment file:

```bash
cp .env.example .env.local
```

Configure any desired production values in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NOTIFICATION_EMAIL=info@simpetadvisory.com
```

### 4. Running the Development Server
Start the Next.js development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🧪 Build & Quality Verification

Run standard validation checks before raising changes:

```bash
# Run ESLint validation
npm run lint

# Generate production build (verifies static prerendering and TypeScript types)
npm run build

# Start production server locally
npm run start
```

---

## 🔒 Security & Data Privacy

* **Zero Plaintext Sensitive Storage**: Client financial data is never logged through web forms.
* **Bot & Flood Mitigation**: In-memory rate limiting rejects rapid abusive submissions; hidden honeypot attributes discard automated bot spam silently.
* **Strict Privacy Policy**: Customer contact details are strictly confidential and governed by the Kenyan Data Protection Act principles.

---

## 📜 License & Copyright

Copyright &copy; 2026 **Simpet Advisory**. All rights reserved.  
Unauthorized duplication, distribution, or reverse engineering of proprietary consulting frameworks without express written permission is strictly prohibited.
