export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  targetAudience: string;
  ctaText: string;
  iconName: string;
}

export const COMPANY_INFO = {
  name: "Simpet Advisory",
  tagline: "Empowering People. Strengthening Businesses.",
  subheadline: "Practical accounting, statutory tax consultancy, outsourced audit, and financial empowerment training to help people build confidence and businesses scale with integrity.",
  manager: {
    name: "Catherine Mwangi",
    role: "Managing Director & Lead Consultant",
    bio: "Accomplished financial consultant and corporate educator with extensive expertise in Kenyan statutory compliance, financial reporting, corporate governance, and systems modernization.",
  },
  contact: {
    location: "Temple Road, behind Ronald Ngara Post Office, Nairobi",
    postalAddress: "P.O Box 35696-00100, Nairobi, Kenya",
    phone: "+254 773 100 577",
    phoneSecondary: "+254 750 371 381",
    phoneDisplay: "0773 100 577 / 0750 371 381",
    phonePrimaryDisplay: "0773 100 577",
    phoneSecondaryDisplay: "0750 371 381",
    email: "info@simpetadvisory.com",
    workingHours: "Monday – Friday: 8:00 AM – 5:00 PM EAT",
  },
  partnerNotice: "Authorized Zoho Partner for Cloud ERP and Accounting Systems Implementation in East Africa.",
  zohoLogo: "/images/zoho-logo.png",
  kraLogo: "/images/kra-logo.png",
} as const;

export const SERVICES: ServiceItem[] = [
  {
    id: "accounting-financial-management",
    slug: "accounting-financial-management",
    title: "Accounting & Financial Management",
    shortDescription: "Complete bookkeeping, financial statement preparation, cash-flow forecasting, and executive management reporting.",
    fullDescription: "From monthly ledger reconciliation to board-level financial reports, we establish accurate, audit-ready financial systems that give leadership clear visibility into cash flow and profitability.",
    highlights: [
      "Bookkeeping & ledger reconciliation",
      "Monthly management accounts & cash flow forecasts",
      "Financial statement preparation (IFRS compliant)",
      "Budgeting & internal controls design",
    ],
    targetAudience: "SMEs, growing enterprises, and established institutions requiring reliable financial stewardship.",
    ctaText: "Discuss Accounting Needs",
    iconName: "BarChart3",
  },
  {
    id: "tax-statutory-consultancy",
    slug: "tax-statutory-consultancy",
    title: "Tax & Statutory Consultancy",
    shortDescription: "End-to-end KRA tax compliance, VAT, corporate tax planning, PAYE, statutory returns, and tax health checks.",
    fullDescription: "Navigate Kenya Revenue Authority (KRA) obligations with confidence. We handle VAT, Corporate Income Tax, PAYE, Withholding Tax, and ensure timely compliance to avert costly penalties.",
    highlights: [
      "KRA iTax compliance & monthly statutory filings (VAT, PAYE, NSSF, NHIF/SHIF, NITA)",
      "Corporate income tax returns & installment computations",
      "Comprehensive tax health checks & compliance audits",
      "KRA audit representation & objection dispute support",
    ],
    targetAudience: "Businesses seeking complete statutory peace of mind and proactive tax optimization.",
    ctaText: "Request Tax Advisory",
    iconName: "FileCheck2",
  },
  {
    id: "outsourced-audit",
    slug: "outsourced-audit",
    title: "Outsourced Audit Services",
    shortDescription: "Independent internal audits, risk management assessments, compliance reviews, and pre-audit readiness.",
    fullDescription: "Strengthen governance, detect internal vulnerabilities early, and verify financial integrity through systematic outsourced internal audits and statutory audit preparation.",
    highlights: [
      "Risk-based internal audits & process walkthroughs",
      "Internal controls assessment & fraud risk mitigation",
      "External audit preparation & working papers compilation",
      "Compliance verification against Kenyan statutory guidelines",
    ],
    targetAudience: "Organizations, NGOs, and boards needing independent assurance and tight internal governance.",
    ctaText: "Schedule Audit Consultation",
    iconName: "ShieldCheck",
  },
  {
    id: "staff-training-empowerment",
    slug: "staff-training-empowerment",
    title: "Staff Training & Financial Empowerment",
    shortDescription: "Transformative financial literacy programs, corporate employee wellness workshops, and keynote empowerment talks.",
    fullDescription: "Equip your workforce with practical financial literacy—from personal budgeting and debt management to understanding business drivers—boosting staff morale and productivity.",
    highlights: [
      "Workplace financial wellness & personal budgeting modules",
      "Debt management, savings culture & retirement readiness",
      "Financial literacy for non-financial managers & department heads",
      "Keynote empowerment talks on purpose, leadership, and resilience",
    ],
    targetAudience: "HR leaders, team managers, conference organizers, and corporate wellness champions.",
    ctaText: "Request Training Program",
    iconName: "GraduationCap",
  },
  {
    id: "zoho-books-erp-consultancy",
    slug: "zoho-books-erp-consultancy",
    title: "Zoho Books & Cloud ERP Consultancy",
    shortDescription: "Authorized partner implementation, workflow automation, legacy data migration, and customized staff onboarding.",
    fullDescription: "Modernize your business operations with Zoho Books. We evaluate your accounting workflows, configure chart of accounts, migrate historical data, and train your team for a smooth transition.",
    highlights: [
      "Business needs analysis & cloud workflow architecture",
      "Zoho Books setup, customized invoicing & chart of accounts",
      "Data migration from manual spreadsheets or legacy systems",
      "Hands-on user training & post-implementation support",
    ],
    targetAudience: "Enterprises modernizing manual accounting or transitioning to a robust cloud ERP.",
    ctaText: "Discuss Zoho Implementation",
    iconName: "Boxes",
  },
];
