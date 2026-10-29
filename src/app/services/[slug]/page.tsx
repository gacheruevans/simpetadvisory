import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  HelpCircle, 
  ShieldCheck, 
  Phone, 
  Mail, 
  ArrowLeft 
} from "lucide-react";
import { DETAILED_SERVICES } from "@/content/services-detail";
import { COMPANY_INFO, SERVICES } from "@/content/company";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(DETAILED_SERVICES).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = DETAILED_SERVICES[slug];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Simpet Advisory Nairobi`,
    description: service.heroDescription,
    alternates: {
      canonical: `https://simpetadvisory.com/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Simpet Advisory`,
      description: service.heroDescription,
      url: `https://simpetadvisory.com/services/${slug}`,
      siteName: "Simpet Advisory",
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = DETAILED_SERVICES[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. SERVICE HERO */}
      <section className="bg-gradient-to-b from-[#12243A] via-[#162e4a] to-[#0a1522] text-white pt-14 pb-20 sm:pt-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-400 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <span className="text-teal-400 font-medium truncate max-w-xs sm:max-w-none">{service.title}</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-900/60 border border-teal-700/60 text-xs font-semibold uppercase tracking-wider text-teal-300">
                <ShieldCheck className="w-3.5 h-3.5" />
                {service.badge}
              </div>

              {service.slug === "tax-statutory-consultancy" && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-slate-900 border border-slate-200 text-xs font-semibold shadow-xs">
                  <div className="relative w-20 h-4 shrink-0">
                    <Image
                      src="/images/kra-logo.png"
                      alt="Kenya Revenue Authority"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium border-l border-slate-200 pl-2">Tax Compliance</span>
                </div>
              )}

              {service.slug === "zoho-books-erp-consultancy" && (
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-xs text-white">
                  <div className="relative w-12 h-4 shrink-0">
                    <Image
                      src="/images/zoho-logo.png"
                      alt="Zoho"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-semibold text-teal-300">Authorized Partner</span>
                </div>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {service.heroHeadline}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              {service.heroDescription}
            </p>

            {/* Quick Action Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href={`/contact?service=${service.slug}`}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-[#0F766E] hover:bg-teal-700 shadow-lg shadow-teal-900/30 transition-all hover:-translate-y-0.5"
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <a
                href="#deliverables"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-all"
              >
                View Deliverables
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 2. TARGET AUDIENCE */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12">
            <div className="max-w-3xl space-y-4 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0F766E]">
                Who This Is For
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12243A]">
                {service.audienceHeadline}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.targetAudience.map((audience, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-md text-slate-700 font-medium">{audience}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Assurance Banner for KRA */}
      {service.slug === "tax-statutory-consultancy" && (
        <section className="py-10 bg-slate-900 border-b border-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-slate-800/80 border border-slate-700 shadow-xl">
              <div className="space-y-1 text-center md:text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-400">Statutory Tax Excellence</div>
                <h3 className="text-xl sm:text-2xl font-bold">KRA iTax, eTIMS & Statutory Compliance</h3>
                <p className="text-md text-slate-200 max-w-xl leading-relaxed">
                  We manage your monthly VAT, PAYE, and annual corporate returns with zero default notices, complete ledger accuracy, and dedicated KRA audit defense.
                </p>
              </div>
              <div className="relative w-48 h-14 shrink-0 bg-white rounded-2xl p-2.5 border border-slate-200 shadow-md">
                <Image
                  src="/images/kra-logo.png"
                  alt="Kenya Revenue Authority"
                  fill
                  className="object-contain p-1"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Partner Assurance Banner for Zoho */}
      {service.slug === "zoho-books-erp-consultancy" && (
        <section className="py-10 bg-slate-900 border-b border-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-slate-800/80 border border-slate-700 shadow-xl">
              <div className="space-y-1 text-center md:text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-400">Verified Implementation Specialist</div>
                <h3 className="text-xl sm:text-2xl font-bold">Official Authorized Zoho Partner in Kenya</h3>
                <p className="text-md text-slate-200 max-w-xl leading-relaxed">{COMPANY_INFO.partnerNotice}</p>
              </div>
              <div className="relative w-36 h-14 shrink-0 bg-slate-900 rounded-2xl p-2 border border-slate-700">
                <Image
                  src="/images/zoho-logo.png"
                  alt="Zoho"
                  fill
                  className="object-contain p-1"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. PRACTICE DELIVERABLES */}
      <section className="py-20 bg-slate-50 border-b border-slate-200" id="deliverables">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F766E]">
              Scope of Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12243A]">
              Detailed Deliverables & Work Streams
            </h2>
            <p className="text-md sm:text-lg text-slate-600 leading-relaxed">
              Every deliverable is handled with meticulous technical discipline, verified checklists, and executive transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#12243A]">{item.title}</h3>
                  <p className="text-md text-slate-600 leading-relaxed">{item.description}</p>
                  
                  <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-sm text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ENGAGEMENT TIMELINE */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F766E]">
              Engagement Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12243A]">
              How We Execute This Practice
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-2xl font-black text-teal-600/40 block mb-2">{step.step}</span>
                <h3 className="text-base font-bold text-[#12243A] mb-2">{step.title}</h3>
                <p className="text-md text-slate-600 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRACTICE FAQS */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
              <HelpCircle className="w-3.5 h-3.5" />
              Practice Inquiries
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#12243A]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, fIdx) => (
              <div key={fIdx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-[#12243A]">{faq.question}</h3>
                <p className="text-md sm:text-lg text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONVERSION CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-br from-[#12243A] to-[#0a1522] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {service.ctaHeadline}
          </h2>
          <p className="text-md sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a conversation with {COMPANY_INFO.manager.name} to evaluate your requirements and receive a structured proposal.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/contact?service=${service.slug}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-semibold text-[#12243A] bg-teal-400 hover:bg-teal-300 shadow-xl transition-all font-sans"
            >
              <span>{service.ctaText}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Explore Other Services</span>
            </Link>
          </div>

          <div className="pt-6 text-xs text-slate-400">
            Nairobi Office: {COMPANY_INFO.contact.location}
          </div>
        </div>
      </section>

    </div>
  );
}
