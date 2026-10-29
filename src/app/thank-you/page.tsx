"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Home 
} from "lucide-react";
import { COMPANY_INFO } from "@/content/company";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref") || "SA-CONFIRMED";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
      
      {/* Success Badge */}
      <div className="w-20 h-20 rounded-3xl bg-teal-50 border border-teal-200 text-teal-600 mx-auto flex items-center justify-center shadow-md animate-in zoom-in duration-200">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
          <ShieldCheck className="w-3.5 h-3.5" />
          Enquiry Received
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#12243A]">
          Thank You for Reaching Out
        </h1>
        <p className="text-md sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
          Your consultation request has been logged successfully. Our managing consultant, Catherine Mwangi, will review your details shortly.
        </p>
      </div>

      {/* Reference Card */}
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 inline-block text-left max-w-md w-full">
        <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
          Reference Identifier
        </div>
        <div className="text-xl font-mono font-bold text-[#12243A] tracking-wider select-all">
          {ref}
        </div>
        <p className="text-sm text-slate-500 mt-2">
          Please retain this reference code for any follow-up communications with our Nairobi office.
        </p>
      </div>

      {/* Realistic Next Steps */}
      <div className="rounded-3xl bg-white border border-slate-200 p-8 text-left shadow-xs space-y-6">
        <h2 className="text-lg font-bold text-[#12243A]">What to Expect Next</h2>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              1
            </div>
            <div>
              <div className="text-sm font-semibold text-[#12243A]">Initial Requirement Assessment</div>
              <div className="text-sm text-slate-600 leading-relaxed">Within 24 business hours, our team evaluates your submission against available scheduling and engagement capacity.</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              2
            </div>
            <div>
              <div className="text-sm font-semibold text-[#12243A]">Discovery Conversation</div>
              <div className="text-sm text-slate-600 leading-relaxed">We reach out via your preferred channel to clarify specific requirements, software environments, or training timelines.</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              3
            </div>
            <div>
              <div className="text-sm font-semibold text-[#12243A]">Transparent Scope & Proposal</div>
              <div className="text-sm text-slate-600 leading-relaxed">You receive a concrete scope of work, timeline, and fee proposal before any commitment is made.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Urgent Notice & Actions */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#12243A] hover:bg-[#1b3552] transition-colors gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>

        <div className="flex flex-wrap gap-2 justify-center">
          <a
            href="tel:+254773100577"
            className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors gap-2"
          >
            <Phone className="w-4 h-4 text-teal-600" />
            <span>Call 0773 100 577</span>
          </a>
          <a
            href="tel:+254750371381"
            className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors gap-2"
          >
            <Phone className="w-4 h-4 text-teal-600" />
            <span>Call 0750 371 381</span>
          </a>
        </div>
      </div>

    </div>
  );
}

export default function ThankYouPage() {
  return (
    <div className="py-20 bg-slate-50 min-h-[70vh] flex items-center">
      <Suspense fallback={
        <div className="max-w-xl mx-auto text-center text-slate-500">
          Loading confirmation...
        </div>
      }>
        <ThankYouContent />
      </Suspense>
    </div>
  );
}
