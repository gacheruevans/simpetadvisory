import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  ShieldCheck, 
  Target, 
  HeartHandshake, 
  TrendingUp, 
  Award, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles,
  Compass,
  Users
} from "lucide-react";
import { COMPANY_INFO } from "@/content/company";

export const metadata: Metadata = {
  title: "About Us | Catherine Mwangi & Simpet Advisory Nairobi",
  description: "Learn about Simpet Advisory, our Managing Director Catherine Mwangi, and our mission to provide premier accounting, statutory tax advisory, internal audit, and staff financial empowerment in Kenya.",
  alternates: {
    canonical: "https://simpetadvisory.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#12243A] via-[#162e4a] to-[#0a1522] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-400 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <span className="text-teal-400 font-medium">About Us</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-900/60 border border-teal-700/60 text-xs font-semibold uppercase tracking-wider text-teal-300">
              <Sparkles className="w-3.5 h-3.5" />
              Our Story & Leadership
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Bridging Rigorous Financial Systems with Human Empowerment.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              Simpet Advisory is a boutique financial and business systems consultancy headquartered in Nairobi, Kenya. We exist to solve two intertwined challenges: building reliable, audit-ready financial infrastructure for organizations, and elevating the financial confidence of the people who power them.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-[#0F766E] hover:bg-teal-700 shadow-lg shadow-teal-900/30 transition-all"
              >
                <span>Meet With Us</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-all"
              >
                Our Consulting Practices
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE SIMPET PHILOSOPHY */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0F766E]">
                Why Simpet Advisory
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#12243A]">
                The Twin Pillars of Sustainable Business
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Many consultancies view numbers in complete isolation—focusing strictly on bookkeeping entries, tax brackets, and compliance checklists. Others focus entirely on motivational training without understanding operational economics.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Simpet Advisory was founded on a different conviction: <strong className="text-[#12243A]">true organizational strength requires both.</strong> A company cannot scale sustainably if its accounting records are in disarray or statutory liabilities are ignored. Equally, an organization cannot thrive if its workforce is weighed down by personal financial anxiety and lack of economic literacy.
              </p>
              
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-teal-700 font-bold text-lg mb-1">01. Sound Systems</div>
                  <div className="text-xs text-slate-600">
                    Clean ledgers, full KRA compliance, risk assurance, and automated cloud workflows via Zoho Books.
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-[#C89B3C] font-bold text-lg mb-1">02. Empowered People</div>
                  <div className="text-xs text-slate-600">
                    Practical financial literacy, workplace wellness, and inspiring leadership talks that build lasting confidence.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-slate-900 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="space-y-6 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Core Promise</h3>
                  <blockquote className="text-lg text-slate-300 italic border-l-2 border-teal-500 pl-4 py-1">
                    &ldquo;Empowering People. Strengthening Businesses.&rdquo;
                  </blockquote>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    We pledge to serve every client with absolute statutory diligence, clear communication without confusing jargon, and transparent pricing that respects your commercial reality.
                  </p>
                  <div className="pt-4 border-t border-slate-800 flex items-center gap-4 text-xs text-teal-300">
                    <ShieldCheck className="w-5 h-5 text-teal-400" />
                    <span>Authorized Zoho Partner & Kenyan Statutory Advisory</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. LEADERSHIP PROFILE: CATHERINE MWANGI */}
      <section className="py-24 bg-slate-50 border-b border-slate-200" id="leadership">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F766E]">
              Consultancy Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#12243A]">
              Meet Catherine Mwangi
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              {COMPANY_INFO.manager.role} of Simpet Advisory.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 lg:p-16 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm rounded-3xl bg-gradient-to-tr from-[#12243A] via-[#1a3656] to-teal-700 p-8 text-white shadow-xl text-center space-y-4">
                  <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 mx-auto flex items-center justify-center text-4xl font-extrabold text-white shadow-inner">
                    CM
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{COMPANY_INFO.manager.name}</h3>
                    <p className="text-sm text-teal-300 font-medium mt-1">{COMPANY_INFO.manager.role}</p>
                  </div>
                  <div className="pt-4 border-t border-white/10 text-xs text-slate-300 space-y-1">
                    <div>Financial Consultant & Corporate Trainer</div>
                    <div className="text-[#C89B3C] font-semibold">Nairobi, Kenya</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-2xl font-bold text-[#12243A]">
                  Dedicated to Building Stronger Financial Foundations
                </h3>
                
                <p className="text-base text-slate-600 leading-relaxed">
                  Catherine Mwangi brings extensive experience in Kenyan statutory tax compliance, financial reporting, corporate budgeting, and systems modernization. Throughout her career, she has guided business owners through complex KRA tax requirements, spearheaded internal control implementations, and helped organizations navigate critical transitions from manual spreadsheets to structured cloud accounting.
                </p>

                <p className="text-base text-slate-600 leading-relaxed">
                  As an educator and keynote speaker, Catherine is passionate about breaking down intimidating financial concepts into practical, relatable steps. Her corporate financial wellness workshops have transformed how employees view their earnings, savings, debt, and retirement planning, creating calmer, more focused teams.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                    <span>Hands-on leadership across all client advisory assignments</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                    <span>Deep familiarity with KRA iTax, eTIMS, VAT, and corporate statutory rules</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                    <span>Certified Zoho Books cloud ERP implementation expertise</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#0F766E] hover:bg-teal-700 transition-all shadow-sm"
                  >
                    <span>Connect with Catherine</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F766E]">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#12243A]">
              The Values That Shape Our Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12243A]">Statutory Integrity</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe in ethical compliance and uncompromising honesty. We help clients navigate rules legally without shortcuts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12243A]">Technical Precision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Double-entry bookkeeping and audit reconciliations require meticulous care. We verify numbers to the cent.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12243A]">Human Empathy</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Financial difficulties can be stressful. We treat founders and employees with warmth, dignity, and practical reassurance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#12243A]">Operational Modernization</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We champion modern cloud technology like Zoho Books to replace manual drudgery with automated efficiency.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. NAIROBI OFFICE & LOCATION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0F766E]">
                  Our Operational Base
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12243A]">
                  Located in the Heart of Nairobi
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Conveniently situated in Nairobi CBD, our offices serve businesses across the Nairobi metropolitan area, wider Kenya, and regional East African clients.
                </p>

                <div className="space-y-3 pt-2 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-[#12243A]">Physical Address:</span>
                      <span>{COMPANY_INFO.contact.location}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 text-[#C89B3C] shrink-0 font-bold flex items-center justify-center">
                      📮
                    </div>
                    <div>
                      <span className="font-semibold block text-[#12243A]">Postal Address:</span>
                      <span>{COMPANY_INFO.contact.postalAddress}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-[#12243A]">Email:</span>
                      <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-teal-700 underline">
                        {COMPANY_INFO.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full rounded-2xl bg-slate-900 p-6 text-white text-center space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 mx-auto flex items-center justify-center font-bold">
                    SA
                  </div>
                  <h3 className="text-lg font-bold">Schedule an In-Person Meeting</h3>
                  <p className="text-xs text-slate-300">
                    We welcome visits by appointment for quiet, confidential discussions regarding your financial systems, statutory challenges, or staff training needs.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full px-5 py-2.5 rounded-xl text-sm font-semibold text-[#12243A] bg-teal-400 hover:bg-teal-300 transition-colors"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-br from-[#12243A] to-[#0a1522] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Partner With a Consultancy That Invests in Your Success
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Experience the peace of mind that comes with accurate books, zero statutory surprises, and an empowered team.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-semibold text-[#12243A] bg-teal-400 hover:bg-teal-300 shadow-xl transition-all font-sans"
            >
              <span>Discuss Your Needs</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
