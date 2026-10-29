export interface DetailedService {
  slug: string;
  title: string;
  badge: string;
  subtitle: string;
  heroHeadline: string;
  heroDescription: string;
  audienceHeadline: string;
  targetAudience: string[];
  deliverables: {
    title: string;
    description: string;
    points: string[];
  }[];
  process: {
    step: string;
    title: string;
    detail: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  ctaText: string;
  ctaHeadline: string;
}

export const DETAILED_SERVICES: Record<string, DetailedService> = {
  "accounting-financial-management": {
    slug: "accounting-financial-management",
    title: "Accounting & Financial Management",
    badge: "Financial Stewardship",
    subtitle: "Precision Bookkeeping, Financial Statements & Executive Cash Flow Reporting",
    heroHeadline: "Accurate, Audit-Ready Financials to Guide Executive Decisions",
    heroDescription: "We provide structured bookkeeping, monthly ledger reconciliation, and IFRS-compliant financial statement preparation to give Kenyan business leaders total clarity over profitability and cash flow.",
    audienceHeadline: "Designed for Enterprises That Cannot Afford Financial Blind Spots",
    targetAudience: [
      "Growing SMEs transitioning away from ad-hoc bookkeeping",
      "Established businesses requiring timely monthly management accounts",
      "Companies preparing for investor funding, banking facilities, or audits",
      "Executive boards needing structured cash flow forecasts and KPI dashboards",
    ],
    deliverables: [
      {
        title: "Routine Bookkeeping & Reconciliation",
        description: "Systematic capture of every transaction with rigorous double-entry standards.",
        points: [
          "Accounts payable & receivable management",
          "Monthly multi-currency bank & mobile money (M-Pesa) reconciliation",
          "Fixed assets register maintenance & depreciation calculations",
          "Inventory ledger and cost of sales reconciliation",
        ],
      },
      {
        title: "IFRS-Compliant Financial Reporting",
        description: "Standardized financial statements ready for boards, banks, and auditors.",
        points: [
          "Statement of Comprehensive Income (Profit & Loss)",
          "Statement of Financial Position (Balance Sheet)",
          "Statement of Cash Flows & Working Capital analysis",
          "Variance commentary comparing actuals against agreed budgets",
        ],
      },
      {
        title: "Management Accounting & Internal Controls",
        description: "Strategic advisory to preserve margins and safeguard company assets.",
        points: [
          "Annual operating budget & capital expenditure models",
          "Cash runway forecasting & working capital optimization",
          "Internal control policies & petty cash governance",
          "Cost allocation & gross margin analysis across business units",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Ledger Diagnostic",
        detail: "We review your historical records, chart of accounts, and outstanding reconciliations to identify discrepancies.",
      },
      {
        step: "02",
        title: "System & Cadence Setup",
        detail: "We align document submission timelines, automate data pipelines, and standardize month-end closing schedules.",
      },
      {
        step: "03",
        title: "Ongoing Monthly Accounting",
        detail: "Our team reconciles transactions, produces monthly reports, and conducts a monthly executive debrief.",
      },
      {
        step: "04",
        title: "Year-End Audit Readiness",
        detail: "We compile working paper files, schedules, and disclosures for external auditors or tax filing.",
      },
    ],
    faqs: [
      {
        question: "Can you take over accounting if our past books are in disarray?",
        answer: "Yes. We frequently conduct historical 'catch-up' bookkeeping and ledger reconciliations to bring backdated records into full statutory compliance.",
      },
      {
        question: "Do you work with cloud accounting software like Zoho Books?",
        answer: "Yes, we specialize in modern cloud accounting platforms like Zoho Books, ensuring real-time visibility and automated bank feeds.",
      },
    ],
    ctaText: "Discuss Accounting Needs",
    ctaHeadline: "Gain Total Visibility Over Your Numbers",
  },

  "tax-statutory-consultancy": {
    slug: "tax-statutory-consultancy",
    title: "Tax & Statutory Consultancy",
    badge: "Statutory Compliance",
    subtitle: "KRA Tax Compliance, VAT, PAYE, Corporate Tax Planning & Dispute Representation",
    heroHeadline: "Complete KRA Tax Compliance and Strategic statutory Peace of Mind",
    heroDescription: "Stay ahead of Kenya Revenue Authority (KRA) obligations, optimize corporate tax exposure, and eliminate penalty risks with guidance from experienced tax professionals.",
    audienceHeadline: "Essential for Businesses Operating in Kenya's Evolving Tax Environment",
    targetAudience: [
      "Companies navigating KRA iTax and electronic tax invoice (eTIMS) requirements",
      "Firms facing KRA compliance notifications, audits, or penalty assessments",
      "Employers managing complex PAYE, NSSF, NHIF/SHIF, and Housing Levy calculations",
      "Directors planning restructuring or seeking proactive corporate tax advice",
    ],
    deliverables: [
      {
        title: "Monthly Statutory Filing & Compliance",
        description: "Timely computation and filing before the statutory deadlines.",
        points: [
          "Value Added Tax (VAT) filing and input tax validation",
          "PAYE, Affordable Housing Levy, NSSF, NHIF/SHIF, and NITA",
          "Withholding Tax (WHT) and Withholding VAT reconciliation",
          "Generation of payment registration numbers (PRNs) on KRA iTax",
        ],
      },
      {
        title: "Annual Corporate Tax & Returns",
        description: "Accurate tax liability determination ensuring full deduction utilization.",
        points: [
          "Corporate Income Tax computations & annual return submissions",
          "Installment tax schedules and advance payment forecasts",
          "Capital allowances and tax-deductible expense optimization",
          "Tax compliance certificates (TCC) renewal management",
        ],
      },
      {
        title: "Tax Health Checks & KRA Audit Support",
        description: "Proactive defense against unexpected assessments and punitive penalties.",
        points: [
          "Comprehensive tax diagnostic to uncover latent exposure areas",
          "Representation during KRA desk reviews, compliance visits, and audits",
          "Drafting technical objection notices and dispute correspondence",
          "Assistance with tax amnesty or penalty waiver applications",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Compliance Review",
        detail: "We audit your KRA iTax ledger, past returns, and withholding receipts to verify existing status.",
      },
      {
        step: "02",
        title: "Tax Calendar & Roadmap",
        detail: "We institute a strict monthly tax compliance calendar with clear cut-off dates for payroll and supplier VAT invoices.",
      },
      {
        step: "03",
        title: "Monthly Computations & Filings",
        detail: "We calculate statutory liabilities accurately and file returns well before the 9th and 20th day deadlines.",
      },
      {
        step: "04",
        title: "Proactive Planning & TCC",
        detail: "We conduct periodic reviews to secure valid Tax Compliance Certificates and prepare for financial year-end.",
      },
    ],
    faqs: [
      {
        question: "How do you help if KRA issues an unexpected tax assessment or penalty?",
        answer: "We review the basis of the assessment against Kenyan tax statutes, analyze the underlying ledger documentation, and prepare formal notices of objection to dispute unlawful or inflated penalties within statutory deadlines.",
      },
      {
        question: "Can you assist with eTIMS integration and compliance?",
        answer: "Yes, we advise clients on eTIMS compliance, ensuring that business sales and expense invoices meet KRA electronic invoicing mandates.",
      },
    ],
    ctaText: "Request Tax Advisory",
    ctaHeadline: "Protect Your Business Against KRA Penalties",
  },

  "outsourced-audit": {
    slug: "outsourced-audit",
    title: "Outsourced Audit Services",
    badge: "Risk & Governance",
    subtitle: "Internal Audits, Governance Assessments, Internal Controls & Pre-Audit Readiness",
    heroHeadline: "Rigorous Assurance to Strengthen Governance and Detect Vulnerabilities",
    heroDescription: "We deliver objective, risk-based internal audits and external audit preparation that safeguard assets, ensure regulatory adherence, and provide board-level confidence.",
    audienceHeadline: "Vital for Boards, Directors, and Growing Organizations",
    targetAudience: [
      "Companies wanting independent verification of internal accounting controls",
      "Firms preparing for annual external audits that want to avoid surprises",
      "Non-profits and institutions requiring transparent grant and procurement reviews",
      "Executive management seeking to mitigate fraud risk and procedural leakage",
    ],
    deliverables: [
      {
        title: "Risk-Based Internal Audits",
        description: "Independent evaluation of key operational and financial workflows.",
        points: [
          "Procurement and expenditure authorization walkthroughs",
          "Revenue recognition, cash handling, and bank control reviews",
          "Payroll integrity and ghost-worker verification",
          "Inventory controls, stock-taking supervision, and shrinkage audits",
        ],
      },
      {
        title: "Internal Control & Policy Design",
        description: "Strengthening operational policies to prevent fraud and errors.",
        points: [
          "Segregation of duties assessment across finance and operations",
          "Approval threshold matrix design for corporate spending",
          "Vendor due diligence and conflict-of-interest policy reviews",
          "Comprehensive internal audit reports with prioritized action items",
        ],
      },
      {
        title: "External Audit Readiness",
        description: "Preparation that cuts external audit time, costs, and management friction.",
        points: [
          "Compilation of complete audit lead schedules and supporting files",
          "Pre-audit technical accounting memos and IFRS disclosure notes",
          "Direct liaison with external audit teams during fieldwork",
          "Post-audit management letter resolution and remediation tracking",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit Planning & Scope",
        detail: "We define the audit charter, risk areas, sample size, and timeline in consultation with management.",
      },
      {
        step: "02",
        title: "Fieldwork & Testing",
        detail: "We test transactions, verify supporting documents, inspect physical assets, and interview key personnel.",
      },
      {
        step: "03",
        title: "Finding Analysis & Exit Meeting",
        detail: "We discuss preliminary observations with department heads to validate facts and clarify context.",
      },
      {
        step: "04",
        title: "Formal Audit Report",
        detail: "We present a comprehensive report to directors detailing risk severity, root causes, and practical corrective actions.",
      },
    ],
    faqs: [
      {
        question: "How is an outsourced internal audit different from an external audit?",
        answer: "External audits focus on validating whether historical financial statements are materially true and fair for external stakeholders. Internal audits focus on operational efficiency, fraud prevention, compliance, and strengthening internal controls for management.",
      },
      {
        question: "Can you help small businesses that don't have a full-time internal auditor?",
        answer: "Yes. Our outsourced model allows small and mid-sized businesses to access senior audit expertise on a quarterly or bi-annual basis without the overhead of a full-time department.",
      },
    ],
    ctaText: "Schedule Audit Consultation",
    ctaHeadline: "Strengthen Your Internal Controls Today",
  },

  "staff-training-empowerment": {
    slug: "staff-training-empowerment",
    title: "Staff Training & Financial Empowerment",
    badge: "People & Culture",
    subtitle: "Corporate Financial Literacy, Employee Wellness Workshops & Keynote Talks",
    heroHeadline: "Transformative Financial Literacy and Inspiring Empowerment Programs",
    heroDescription: "We deliver practical financial education and motivational keynote talks that alleviate personal financial stress, elevate workplace productivity, and inspire resilient leadership.",
    audienceHeadline: "Designed for HR Leaders, Corporate Retreats & Forward-Thinking Organizations",
    targetAudience: [
      "HR Directors aiming to boost employee focus, morale, and financial wellness",
      "Corporate leadership planning retreats, strategy offsites, or staff conferences",
      "Organizations tackling high employee loan distress and wage advance reliance",
      "Event organizers seeking an authentic, engaging financial empowerment speaker",
    ],
    deliverables: [
      {
        title: "Corporate Financial Literacy Workshops",
        description: "Practical curriculum that empowers employees to master personal finances.",
        points: [
          "Personal budgeting, living within means, and emergency fund setup",
          "Debt elimination strategies, micro-loan traps, and credit management",
          "Savings culture, investment avenues (Treasury bills, MMFs, SACCOs in Kenya)",
          "Pension literacy, insurance basics, and dignified retirement planning",
        ],
      },
      {
        title: "Finance for Non-Financial Managers",
        description: "Bridging the gap between operational decisions and financial impact.",
        points: [
          "Understanding departmental budgets and P&L statements",
          "Cash flow vs profit: what every manager must know",
          "Cost control techniques without sacrificing service quality",
          "Reading KPI dashboards and ROI on operational initiatives",
        ],
      },
      {
        title: "Keynote Empowerment Talks",
        description: "Inspirational addresses delivered by Catherine Mwangi.",
        points: [
          "Overcoming adversity, resilience, and personal leadership",
          "Purpose-driven careers and ethical entrepreneurship",
          "Developing a resilient mindset in turbulent economic times",
          "Interactive Q&A sessions that spark meaningful audience transformation",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Audience Needs Assessment",
        detail: "We consult with your HR or organizing committee to understand employee demographics and primary financial stressors.",
      },
      {
        step: "02",
        title: "Custom Curriculum Design",
        detail: "We adapt workshop modules, practical exercises, and case studies to match your team's specific reality.",
      },
      {
        step: "03",
        title: "Interactive Delivery",
        detail: "We conduct dynamic, highly engaging in-person or virtual training sessions with real-world Kenyan examples.",
      },
      {
        step: "04",
        title: "Impact Measurement & Tools",
        detail: "Participants receive actionable budgeting templates, and organizers receive feedback evaluation reports.",
      },
    ],
    faqs: [
      {
        question: "Can sessions be conducted in hybrid or virtual formats?",
        answer: "Yes, we facilitate both interactive in-person workshops across Kenya and virtual webinars tailored for distributed or remote teams.",
      },
      {
        question: "How long are the training workshops?",
        answer: "Formats range from 90-minute keynote empowerment sessions to intensive half-day masterclasses or multi-week modular training series.",
      },
    ],
    ctaText: "Request Training Program",
    ctaHeadline: "Invest in Your People's Financial Peace of Mind",
  },

  "zoho-books-erp-consultancy": {
    slug: "zoho-books-erp-consultancy",
    title: "Zoho Books & Cloud ERP Consultancy",
    badge: "Authorized Partner",
    subtitle: "Cloud Accounting Architecture, Workflow Automation & Migration Services",
    heroHeadline: "Authorized Zoho Partner for Cloud ERP Implementation & Training",
    heroDescription: "Transition smoothly from spreadsheets or outdated desktop software to Zoho Books with certified local implementation, data migration, and hands-on staff training.",
    audienceHeadline: "Built for Growing Businesses Ready to Automate Accounting",
    targetAudience: [
      "Businesses outgrowing Excel, QuickBooks Desktop, or manual paper ledgers",
      "Companies wanting multi-user cloud access, live bank feeds, and automated invoicing",
      "Finance teams needing seamless Kenyan KRA VAT compliance inside their accounting software",
      "Executive management wanting real-time mobile reports and automated approval workflows",
    ],
    deliverables: [
      {
        title: "System Scoping & Architecture",
        description: "Designing your accounting software to mirror your operational reality.",
        points: [
          "Operational workflow review and business requirements mapping",
          "Custom Chart of Accounts design tailored to your industry",
          "Configuration of Kenyan tax rates (16% VAT, zero-rated, withholding VAT)",
          "Payment gateway (M-Pesa, bank) and automated feed scoping",
        ],
      },
      {
        title: "Data Migration & Validation",
        description: "Safely moving historical transactions without losing audit continuity.",
        points: [
          "Opening balance validation and ledger cut-off management",
          "Customer, vendor, and inventory item database cleanup and upload",
          "Trial balance reconciliation to ensure zero discrepancy",
          "Customization of professional invoice, receipt, and quote templates",
        ],
      },
      {
        title: "User Training & Go-Live Support",
        description: "Ensuring your team adopts the new system with confidence.",
        points: [
          "Role-based training for cashiers, accountants, and procurement staff",
          "Executive training on dashboards, mobile app usage, and approvals",
          "Supervised parallel run during the first month-end closing",
          "Dedicated post-implementation support and ongoing workflow tuning",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Requirements Discovery",
        detail: "We analyze your invoicing volume, transaction types, approval bottlenecks, and reporting requirements.",
      },
      {
        step: "02",
        title: "Zoho Environment Configuration",
        detail: "We configure your Zoho Books instance, brand templates, currency settings, and tax preferences.",
      },
      {
        step: "03",
        title: "Data Migration & Testing",
        detail: "We extract, format, and import your master data and opening balances, validating balances against your legacy books.",
      },
      {
        step: "04",
        title: "Go-Live & Staff Handover",
        detail: "We train your staff, initiate live transaction posting, and provide hands-on assistance during initial weeks.",
      },
    ],
    faqs: [
      {
        question: "Is our financial data safe in Zoho Books?",
        answer: "Zoho Books employs enterprise-grade 256-bit SSL encryption, automated multi-location cloud backups, and stringent role-based access control, ensuring your financial records remain private and secure.",
      },
      {
        question: "Can Zoho Books generate Kenyan KRA-compliant VAT returns?",
        answer: "Yes. We configure Zoho Books with accurate Kenyan tax rules so that your monthly sales and purchase VAT summaries can be exported and validated for KRA iTax submissions.",
      },
    ],
    ctaText: "Discuss Zoho Implementation",
    ctaHeadline: "Modernize Your Accounting with Certified Zoho Experts",
  },
};
