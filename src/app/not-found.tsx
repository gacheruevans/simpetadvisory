import React from "react";
import Link from "next/link";
import { Compass, Home, Phone, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/content/company";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32 bg-slate-50 min-h-[75vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center space-y-6">
        
        <div className="w-20 h-20 rounded-3xl bg-teal-50 border border-teal-200 text-[#0F766E] mx-auto flex items-center justify-center shadow-sm">
          <Compass className="w-10 h-10 animate-pulse" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0F766E]">
            Error 404 • Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12243A]">
            The Page You Requested Does Not Exist
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The page you are looking for may have been moved or updated. Let&apos;s guide you back to our core services or our homepage.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#0F766E] hover:bg-teal-700 transition-colors gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
          >
            <span>Browse Services</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-slate-200 text-xs text-slate-500">
          Need immediate assistance? Contact our Nairobi office at{" "}
          <span className="font-semibold text-slate-700">{COMPANY_INFO.contact.phoneDisplay}</span>
        </div>

      </div>
    </div>
  );
}
