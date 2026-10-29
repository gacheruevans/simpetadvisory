import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  FileCheck2, 
  ShieldCheck, 
  GraduationCap, 
  Boxes, 
  Users, 
  Sparkles, 
  TrendingUp, 
  MapPin, 
  Phone, 
  Briefcase,
  Layers,
  Award
} from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/content/company";
import FaqSection from "@/components/home/FaqSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-[#12243A] to-[#0a1522] text-white pt-20 pb-28 lg:pt-28 lg:pb-36">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-teal-500/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 right-10 w-[450px] h-[250px] bg-[#C89B3C]/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs sm:text-sm text-slate-200 shadow-inner">
                <div className="relative w-12 h-5 shrink-0">
                  <Image
                    src="/images/zoho-logo.png"
                    alt="Zoho"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                <span className="font-semibold text-teal-300">Authorized Partner</span>
                <span className="text-slate-500">|</span>
                <span>Nairobi, Kenya</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Empowering People. <br />
                <span className="bg-gradient-to-r from-teal-400 via-teal-300 to-[#C89B3C] bg-clip-text text-transparent">
                  Strengthening Businesses.
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Practical accounting, statutory tax consultancy, outsourced audit, and financial empowerment training to help people build confidence and businesses scale with operational excellence.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-[#0F766E] hover:bg-teal-700 shadow-lg shadow-teal-900/30 hover:shadow-teal-900/50 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Discuss Your Needs</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>

                <a
                  href="#services"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all"
                >
                  Explore Practices
                </a>
              </div>

              {/* Proof highlights */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-xs text-slate-400">Statutory Tax Compliance</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Certified</div>
                  <div className="text-xs text-slate-400">Zoho Books Partner</div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="text-2xl font-bold text-white">Bespoke</div>
                  <div className="text-xs text-slate-400">Corporate Staff Training</div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-3xl bg-slate-800/90 border border-slate-700 p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative space-y-6">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-700/80">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Simpet Advisory Suite</div>
                        <div className="text-xs text-slate-400">Governance & Systems</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-900/60 text-emerald-300 border border-emerald-700/50">
                      Active Advisory
                    </span>
                  </div>

                  {/* Highlights List */}
                  <div className="space-y-3.5">
                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/50 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-white">KRA Statutory Adherence</div>
                        <div className="text-xs text-slate-400">VAT, PAYE, and Corporate Returns reconciled seamlessly.</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/50 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-white">Outsourced Audit & Assurance</div>
                        <div className="text-xs text-slate-400">Tight internal controls and structured risk assessments.</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/50 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-white">Zoho Books Cloud Accounting</div>
                        <div className="text-xs text-slate-400">Automated invoices, live bank feeds, and audit trails.</div>
                      </div>
                    </div>
                  </div>

                  {/* Facilitator / Contact badge */}
                  <div className="pt-3 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-300">
                    <div>
                      <span className="text-slate-400">Lead Consultant:</span>{" "}
                      <span className="font-semibold text-white">{COMPANY_INFO.manager.name}</span>
                    </div>
                    <Link href="/about" className="text-teal-400 hover:text-teal-300 font-medium flex items-center gap-1">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THREE AUDIENCE JOURNEYS ("WHO WE SERVE") */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0F766E]">
              Tailored Visitor Journeys
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#12243A]">
              Solutions Built for Your Exact Needs
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Whether you are optimizing organizational operations, empowering staff, or seeking an inspirational speaker, our engagements deliver measurable value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Journey 1: HR & Learning Teams */}
            <div className="rounded-2xl border border-slate-200 p-8 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-teal-200 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                  For HR & People Teams
                </div>
                <h3 className="text-xl font-bold text-[#12243A]">
                  Corporate Financial Literacy
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Equip employees with actionable budgeting, debt elimination strategies, and retirement readiness to reduce financial stress and improve workplace focus.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200/80">
                <Link
                  href="/contact?service=staff-training-empowerment"
                  className="text-sm font-semibold text-[#0F766E] group-hover:text-teal-800 flex items-center gap-1.5"
                >
                  <span>Request Corporate Training</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Journey 2: Event & Community Organisers */}
            <div className="rounded-2xl border border-slate-200 p-8 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-[#C89B3C]/40 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#C89B3C] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                  For Conferences & Retreats
                </div>
                <h3 className="text-xl font-bold text-[#12243A]">
                  Keynote Empowerment Talks
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Inspiring, actionable speaking sessions on resilience, financial confidence, leadership purpose, and personal growth delivered by Catherine Mwangi.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200/80">
                <Link
                  href="/contact?service=staff-training-empowerment"
                  className="text-sm font-semibold text-[#C89B3C] hover:text-amber-800 flex items-center gap-1.5"
                >
                  <span>Request Speaker Availability</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Journey 3: Business Owners & Finance Teams */}
            <div className="rounded-2xl border border-slate-200 p-8 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-teal-200 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                  For Founders & Directors
                </div>
                <h3 className="text-xl font-bold text-[#12243A]">
                  Accounting, Tax & Zoho ERP
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Streamline bookkeeping, ensure total KRA statutory compliance, and transition seamlessly to Zoho Books with authorized partner support.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200/80">
                <Link
                  href="/contact?service=zoho-books-erp-consultancy"
                  className="text-sm font-semibold text-[#0F766E] group-hover:text-teal-800 flex items-center gap-1.5"
                >
                  <span>Request a Systems Discovery Call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION (The 5 Practices) */}
      <section className="py-24 bg-slate-50 border-b border-slate-200" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold tracking-widest uppercase text-[#0F766E]">
                Our Core Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#12243A]">
                Comprehensive Financial & Advisory Practices
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Delivered with rigorous statutory discipline, transparent reporting, and modern systems architecture.
              </p>
            </div>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#12243A] hover:bg-[#1a3656] shadow-sm transition-all"
              >
                <span>Request Custom Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 group-hover:bg-[#0F766E] text-[#0F766E] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                    {srv.id === "accounting-financial-management" && <BarChart3 className="w-6 h-6" />}
                    {srv.id === "tax-statutory-consultancy" && <FileCheck2 className="w-6 h-6" />}
                    {srv.id === "outsourced-audit" && <ShieldCheck className="w-6 h-6" />}
                    {srv.id === "staff-training-empowerment" && <GraduationCap className="w-6 h-6" />}
                    {srv.id === "zoho-books-erp-consultancy" && <Boxes className="w-6 h-6" />}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#12243A] group-hover:text-[#0F766E] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {srv.shortDescription}
                    </p>
                  </div>

                  {/* Key Highlights list */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                      Practice Scope
                    </div>
                    <ul className="space-y-2">
                      {srv.highlights.slice(0, 3).map((hl, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services/${srv.slug}`}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline"
                  >
                    View Details
                  </Link>

                  <Link
                    href={`/contact?service=${srv.id}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200 transition-colors"
                  >
                    <span>{srv.ctaText}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. ZOHO BOOKS & SYSTEMS SPOTLIGHT */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#12243A] via-[#1a3656] to-[#0d5d57] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/60 border border-teal-700/60 text-xs font-semibold uppercase tracking-wider text-teal-300">
                  <Award className="w-3.5 h-3.5" />
                  Authorized Partner Spotlight
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Modernize Your Financial Workflows with Zoho Books
                </h2>

                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                  Stop wrestling with manual spreadsheets and fragmented ledgers. Simpet Advisory provides end-to-end Zoho Books implementation: workflow discovery, chart of accounts design, historical data migration, and hands-on staff onboarding.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    <span>Real-time financial reporting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    <span>Automated KRA VAT calculations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    <span>Legacy spreadsheet migration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    <span>Dedicated local user training</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/contact?service=zoho-books-erp-consultancy"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-[#12243A] bg-white hover:bg-slate-100 shadow-md transition-all"
                  >
                    <span>Discuss Zoho Implementation</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>

                  <Link
                    href="/services/zoho-books-erp-consultancy"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium text-slate-200 hover:text-white border border-slate-600 hover:border-slate-500 transition-all"
                  >
                    View Consultancy Scope
                  </Link>
                </div>
              </div>

              {/* Partner Badging Card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl bg-slate-900/90 border border-slate-700/80 p-8 text-center space-y-5 shadow-2xl">
                  <div className="relative w-44 h-16 mx-auto">
                    <Image
                      src="/images/zoho-logo.png"
                      alt="Zoho Authorized Partner"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">Authorized Zoho Partner</h3>
                    <p className="text-xs text-teal-300 font-medium mt-1">Verified Implementation Specialist</p>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
                    {COMPANY_INFO.partnerNotice}
                  </p>
                  <div className="pt-1 text-[11px] text-[#C89B3C] font-semibold">
                    Strict adherence to official Zoho consulting standards
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. HOW ENGAGEMENTS WORK (4-STEP PROCESS) */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0F766E]">
              Our Proven Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#12243A]">
              How Every Engagement Works
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We eliminate guesswork with a structured, transparent process designed to respect your timeline and deliver actionable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative">
              <div className="text-3xl font-extrabold text-teal-600/30 mb-2">01</div>
              <h3 className="text-lg font-bold text-[#12243A]">Discovery Consultation</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                We sit down with your leadership team to understand operational pain points, compliance deadlines, or training goals.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative">
              <div className="text-3xl font-extrabold text-teal-600/30 mb-2">02</div>
              <h3 className="text-lg font-bold text-[#12243A]">Tailored Scope & Proposal</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                You receive a detailed, unambiguous engagement agreement defining deliverables, timelines, and transparent fee structures.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative">
              <div className="text-3xl font-extrabold text-teal-600/30 mb-2">03</div>
              <h3 className="text-lg font-bold text-[#12243A]">Disciplined Delivery</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Whether deploying Zoho Books, reconciling ledgers, conducting audits, or training staff, we execute with precision.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative">
              <div className="text-3xl font-extrabold text-teal-600/30 mb-2">04</div>
              <h3 className="text-lg font-bold text-[#12243A]">Review & Ongoing Support</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                We provide comprehensive post-delivery reports, executive walkthroughs, and agreed follow-up to ensure lasting impact.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. LEADERSHIP SPOTLIGHT (Catherine Mwangi) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl bg-gradient-to-tr from-[#12243A] via-[#1a3656] to-teal-700 flex flex-col items-center justify-center text-white shadow-xl p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-3xl font-bold mb-3">
                    CM
                  </div>
                  <div className="text-lg font-bold text-white">{COMPANY_INFO.manager.name}</div>
                  <div className="text-xs text-teal-300 font-medium">{COMPANY_INFO.manager.role}</div>
                  <div className="text-[11px] text-[#C89B3C] mt-2 font-medium">Nairobi, Kenya</div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
                  Leadership Spotlight
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#12243A]">
                  Guiding Businesses with Financial Clarity & Empathy
                </h2>

                <p className="text-base text-slate-600 leading-relaxed">
                  {COMPANY_INFO.manager.bio}
                </p>

                <p className="text-base text-slate-600 leading-relaxed">
                  At Simpet Advisory, we believe that sustainable organizational growth is built on two twin pillars: tight, compliant financial systems on one side, and empowered, financially literate people on the other. Every engagement is led with integrity, personal accountability, and deep respect for your corporate mission.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#0F766E] hover:bg-teal-700 transition-colors"
                  >
                    <span>Read Full Profile</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
                  >
                    <span>Schedule a Meeting</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <FaqSection />

      {/* 8. FINAL CONVERSION BANNER */}
      <section className="py-20 bg-gradient-to-br from-[#12243A] to-[#0a1522] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-900/60 text-teal-300 border border-teal-700">
            Let&apos;s Build Together
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Ready to Strengthen Your Financial Foundations?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Schedule a discovery call with Catherine Mwangi and the Simpet Advisory team to discuss your accounting, statutory tax, internal audit, staff training, or Zoho Books requirements.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-semibold text-[#12243A] bg-teal-400 hover:bg-teal-300 shadow-xl transition-all font-sans"
            >
              <span>Discuss Your Needs</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <div className="flex flex-wrap gap-2 justify-center">
              <a
                href="tel:+254773100577"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all gap-2"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Call 0773 100 577</span>
              </a>
              <a
                href="tel:+254750371381"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all gap-2"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Call 0750 371 381</span>
              </a>
            </div>
          </div>

          <div className="pt-6 text-xs text-slate-400 flex items-center justify-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>{COMPANY_INFO.contact.location}</span>
          </div>
        </div>
      </section>

    </div>
  );
}
