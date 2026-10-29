import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ChevronRight, Lock, Eye, FileText, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/content/company";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Handling | Simpet Advisory",
  description: "Learn how Simpet Advisory handles personal and corporate enquiry information in compliance with Kenyan data protection principles.",
  alternates: {
    canonical: "https://simpetadvisory.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-[#12243A] to-[#0a1522] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <span className="text-teal-400 font-medium">Privacy Policy</span>
          </nav>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Privacy Policy & Data Handling Notice
            </h1>
            <p className="text-slate-300 text-sm sm:text-base">
              Last updated: October 2026. Governing how Simpet Advisory processes client and enquiry information.
            </p>
          </div>
        </div>
      </section>

      {/* Body Content */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          <div className="p-6 rounded-2xl bg-teal-50/70 border border-teal-200 text-teal-900 flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-teal-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-sm sm:text-base">Commitment to Confidentiality</span>
              <span className="text-xs sm:text-sm text-teal-800">
                Simpet Advisory treats all client discussions, corporate inquiries, and organizational details with strict confidentiality. We never monetize, sell, or disclose your contact details to third-party marketing networks.
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#12243A]">1. Information We Collect Through This Website</h2>
            <p>
              When you submit a consultation request via our website, we collect only the information necessary to evaluate your inquiry:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li><strong>Personal Identifiers:</strong> Your full name, business email address, telephone/WhatsApp number.</li>
              <li><strong>Organizational Context:</strong> Company name, selected service interest (e.g. Accounting, KRA Tax, Audit, Training, Zoho Books).</li>
              <li><strong>Enquiry Details:</strong> Estimated attendee counts for training, existing accounting software for ERP implementations, or specific statutory tax questions.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#12243A]">2. Information We Never Request Online</h2>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm">
              <strong>Strict Security Principle:</strong> We do NOT request bank account credentials, online banking passwords, KRA iTax passwords, or cloud ERP system administrative logins through this website form. Formal document exchange and discovery occur solely through agreed, secure channels after an engagement contract is signed.
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#12243A]">3. Purpose of Processing</h2>
            <p>Your submitted information is utilized exclusively for:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Responding to your specific advisory inquiries and scheduling discovery consultations.</li>
              <li>Preparing customized commercial fee proposals and training outlines.</li>
              <li>Maintaining administrative records of corporate communications.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#12243A]">4. Data Retention</h2>
            <p>
              Enquiry submissions are retained only for the duration required to assess and respond to your request. If an engagement is established, data retention follows statutory accounting and corporate governance mandates under Kenyan law.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#12243A]">5. Contact Regarding Your Data</h2>
            <p>
              If you have any questions regarding how your data is handled or wish to update or remove your details from our records, please contact:
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1 text-slate-600">
              <div className="font-semibold text-[#12243A]">{COMPANY_INFO.name}</div>
              <div>Attn: {COMPANY_INFO.manager.name} (Managing Director)</div>
              <div>Physical Address: {COMPANY_INFO.contact.location}</div>
              <div>Postal Address: {COMPANY_INFO.contact.postalAddress}</div>
              <div>Email: <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-teal-700 underline">{COMPANY_INFO.contact.email}</a></div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
