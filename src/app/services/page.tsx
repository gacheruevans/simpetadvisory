import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { 
  BarChart3, 
  FileCheck2, 
  ShieldCheck, 
  GraduationCap, 
  Boxes, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight 
} from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/content/company";

export const metadata: Metadata = {
  title: "Practices & Services | Simpet Advisory",
  description: "Explore Simpet Advisory's 5 core practices: Accounting & Financial Management, Tax & Statutory Consultancy, Outsourced Audit, Staff Training & Empowerment, and Zoho Books Cloud ERP Consultancy.",
  alternates: {
    canonical: "https://simpetadvisory.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#12243A] to-[#0a1522] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <span className="text-teal-400 font-medium">Services & Practices</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
              Consulting Catalog
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Practices Built on Technical Rigor & Integrity
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              From day-to-day statutory tax filings and audit-ready bookkeeping to transformative corporate training and modern cloud ERP implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {SERVICES.map((srv, index) => (
            <div
              key={srv.id}
              className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-8 group"
            >
              <div className="space-y-4 max-w-3xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0F766E] group-hover:bg-[#0F766E] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                      {srv.id === "accounting-financial-management" && <BarChart3 className="w-6 h-6" />}
                      {srv.id === "tax-statutory-consultancy" && <FileCheck2 className="w-6 h-6" />}
                      {srv.id === "outsourced-audit" && <ShieldCheck className="w-6 h-6" />}
                      {srv.id === "staff-training-empowerment" && <GraduationCap className="w-6 h-6" />}
                      {srv.id === "zoho-books-erp-consultancy" && <Boxes className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Practice 0{index + 1}
                    </span>
                  </div>

                  {srv.id === "tax-statutory-consultancy" && (
                    <div className="relative w-28 h-6 shrink-0 bg-white p-1 rounded-lg border border-slate-200/90 shadow-2xs" title="Kenya Revenue Authority Compliance">
                      <Image
                        src="/images/kra-logo.png"
                        alt="KRA Compliance"
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                  )}

                  {srv.id === "zoho-books-erp-consultancy" && (
                    <div className="relative w-24 h-7 shrink-0 bg-white p-1 rounded-lg border border-slate-200/90 shadow-2xs" title="Authorized Zoho Partner">
                      <Image
                        src="/images/zoho-logo-color.png"
                        alt="Zoho Partner"
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#12243A]">
                  {srv.title}
                </h2>

                <p className="text-md text-slate-600 leading-relaxed">
                  {srv.fullDescription}
                </p>

                <div className="pt-2">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Key Highlights
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {srv.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 lg:w-60">
                <Link
                  href={`/services/${srv.slug}`}
                  className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#12243A] hover:bg-[#1b3552] transition-colors"
                >
                  <span>Explore Practice</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>

                <Link
                  href={`/contact?service=${srv.id}`}
                  className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200 transition-colors"
                >
                  <span>{srv.ctaText}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-16 bg-[#12243A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Need a Combined Advisory Package?</h2>
          <p className="text-md text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Many clients engage us for both ongoing statutory tax advisory and cloud accounting modernization. We tailor custom multi-service retainers to fit your organization.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-xl text-sm font-semibold text-[#12243A] bg-teal-400 hover:bg-teal-300 transition-colors"
            >
              <span>Schedule Discovery Call</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
