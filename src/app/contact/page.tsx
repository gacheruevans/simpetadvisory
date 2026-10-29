import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  MessageSquare,
  Sparkles,
  Building2
} from "lucide-react";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { COMPANY_INFO } from "@/content/company";

export const metadata: Metadata = {
  title: "Contact & Consultation Request | Simpet Advisory Nairobi",
  description: "Schedule a consultation with Catherine Mwangi at Simpet Advisory. Visit our offices at Temple Road, behind Ronald Ngara Post Office, Nairobi or submit your accounting, tax, or training inquiry online.",
  alternates: {
    canonical: "https://simpetadvisory.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#12243A] via-[#162e4a] to-[#0a1522] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <span className="text-teal-400 font-medium">Contact & Enquiries</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-900/60 border border-teal-700/60 text-xs font-semibold uppercase tracking-wider text-teal-300">
              <MessageSquare className="w-3.5 h-3.5" />
              Direct Advisory Channel
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Let&apos;s Discuss Your Needs
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Whether you are seeking advice on KRA tax compliance, planning a Zoho Books implementation, or arranging corporate financial literacy training, our lead consultants are ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form & Location Details */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#12243A]">Send an Advisory Inquiry</h2>
                <p className="text-md text-slate-600 mt-1 leading-relaxed">
                  Fill out the form below. We review every submission personally and respond within 24 business hours.
                </p>
              </div>

              <Suspense fallback={
                <div className="p-12 text-center text-slate-500 bg-white rounded-3xl border border-slate-200">
                  Loading enquiry form...
                </div>
              }>
                <EnquiryForm />
              </Suspense>
            </div>

            {/* Right Column: Verified Contact Details & Map Info */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Nairobi Office Card */}
              <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#12243A]">Nairobi CBD Office</h3>
                    <p className="text-xs text-slate-500">Corporate Headquarters</p>
                  </div>
                </div>

                <div className="space-y-4 text-md text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#12243A] block">Physical Location:</span>
                      <span className="text-slate-600">{COMPANY_INFO.contact.location}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 text-[#C89B3C] shrink-0 font-bold flex items-center justify-center text-sm">
                      📮
                    </div>
                    <div>
                      <span className="font-semibold text-[#12243A] block">Postal Address:</span>
                      <span className="text-slate-600">{COMPANY_INFO.contact.postalAddress}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#12243A] block">Email Inquiries:</span>
                      <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-teal-700 hover:underline">
                        {COMPANY_INFO.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#12243A] block">Telephone Numbers:</span>
                      <div className="flex flex-col space-y-1 mt-0.5">
                        <a href="tel:+254773100577" className="font-semibold text-slate-900 hover:text-teal-700">
                          0773 100 577
                        </a>
                        <a href="tel:+254750371381" className="font-semibold text-slate-900 hover:text-teal-700">
                          0750 371 381
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#12243A] block">Office Hours:</span>
                      <span className="text-slate-600">{COMPANY_INFO.contact.workingHours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Lead Consultant:</span>
                  <span className="font-semibold text-[#12243A]">{COMPANY_INFO.manager.name}</span>
                </div>
              </div>

              {/* Direct Alternative / WhatsApp */}
              <div className="bg-gradient-to-br from-[#12243A] to-[#0a1522] rounded-3xl p-6 sm:p-8 text-white space-y-4 shadow-md">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400">
                  <ShieldCheck className="w-4 h-4" />
                  Prompt Response Guaranteed
                </div>
                <h3 className="text-xl font-bold">Prefer Direct Messaging?</h3>
                <p className="text-md text-slate-300 leading-relaxed">
                  For urgent statutory deadlines, speaking invitations, or quick availability checks, you can reach out via WhatsApp or telephone during office hours.
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/254773100577?text=Hello%20Simpet%20Advisory,%20I%20would%20like%20to%20discuss%20a%20consultancy%20requirement."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl text-sm font-semibold text-[#12243A] bg-teal-400 hover:bg-teal-300 transition-colors"
                  >
                    <span>Message on WhatsApp (0773 100 577)</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
