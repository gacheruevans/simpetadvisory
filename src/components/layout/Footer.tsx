"use client";

import React from "react";
import Link from "next/link";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  ExternalLink 
} from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/content/company";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#12243A] text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Overview Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-lg shadow-md">
                SA
              </div>
              <div>
                <span className="block text-xl font-bold tracking-tight text-white">
                  Simpet <span className="text-teal-400">Advisory</span>
                </span>
                <span className="block text-[11px] font-medium tracking-wide text-slate-400 uppercase">
                  Financial & Systems Consultants
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Empowering people with actionable financial understanding and equipping growing enterprises with robust accounting, statutory tax compliance, and modern ERP systems.
            </p>

            {/* Catherine Mwangi Leadership Note */}
            <div className="pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C89B3C]">
                Leadership & Governance
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Led by <span className="text-white font-medium">{COMPANY_INFO.manager.name}</span>, {COMPANY_INFO.manager.role}.
              </p>
            </div>

            {/* Authorized Zoho Partner Callout */}
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-3 max-w-sm">
              <div className="p-2 rounded-lg bg-teal-900/60 text-teal-300 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="font-semibold text-white block">Authorized Zoho Partner</span>
                <span className="text-slate-400">Certified implementation & accounting workflows</span>
              </div>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white">
              Practices & Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="hover:text-teal-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-400 transition-colors">
                  About Simpet Advisory
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition-colors">
                  Book a Consultation
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-teal-400 transition-colors">
                  Privacy Policy & Data Handling
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Operating Hours
              </h4>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C89B3C]" />
                {COMPANY_INFO.contact.workingHours}
              </p>
            </div>
          </div>

          {/* Contact Details & Nairobi Office */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white">
              Nairobi Office
            </h3>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Physical Location:</span>
                  <span>{COMPANY_INFO.contact.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-4 h-4 text-[#C89B3C] shrink-0 font-bold flex items-center justify-center text-xs">
                  📮
                </div>
                <div>
                  <span className="font-medium text-white block">Postal Address:</span>
                  <span>{COMPANY_INFO.contact.postalAddress}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Official Email:</span>
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-teal-400 hover:underline">
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Telephone:</span>
                  <span className="text-white font-semibold">{COMPANY_INFO.contact.phoneDisplay}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">
              Contact & Enquiries
            </Link>
            <span>•</span>
            <span className="text-slate-300">Nairobi, Kenya</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
