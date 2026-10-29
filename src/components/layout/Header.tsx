"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  BarChart3, 
  FileCheck2, 
  ShieldCheck, 
  GraduationCap, 
  Boxes,
  ArrowRight
} from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/content/company";

const serviceIcons: Record<string, React.ReactNode> = {
  "accounting-financial-management": <BarChart3 className="w-5 h-5 text-teal-600" />,
  "tax-statutory-consultancy": <FileCheck2 className="w-5 h-5 text-teal-600" />,
  "outsourced-audit": <ShieldCheck className="w-5 h-5 text-teal-600" />,
  "staff-training-empowerment": <GraduationCap className="w-5 h-5 text-teal-600" />,
  "zoho-books-erp-consultancy": <Boxes className="w-5 h-5 text-teal-600" />,
};

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll state for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-200 border-b border-slate-200">
      {/* Top Bar for contact & office location info */}
      <div className="hidden lg:block bg-[#12243A] text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C89B3C]" />
              {COMPANY_INFO.contact.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#C89B3C]" />
              <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white transition-colors">
                {COMPANY_INFO.contact.email}
              </a>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[#C89B3C] font-medium hidden xl:inline">Postal: {COMPANY_INFO.contact.postalAddress}</span>
            <span className="text-slate-400 hidden xl:inline">|</span>
            <span className="flex items-center gap-1.5 font-semibold text-white">
              <Phone className="w-3 h-3 text-[#0F766E]" />
              <a href="tel:+254773100577" className="hover:text-teal-300 transition-colors">0773 100 577</a>
              <span className="text-slate-400 font-normal">or</span>
              <a href="tel:+254750371381" className="hover:text-teal-300 transition-colors">0750 371 381</a>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all ${isScrolled ? "py-3" : "py-4"}`}>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg p-1"
            aria-label={`${COMPANY_INFO.name} Home`}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#12243A] via-[#1a395f] to-[#0F766E] flex items-center justify-center shadow-md shadow-slate-900/10 group-hover:shadow-lg group-hover:scale-105 transition-all">
              <span className="text-white font-bold text-lg tracking-wider">SA</span>
            </div>
            <div>
              <span className="block text-xl font-bold tracking-tight text-[#12243A]">
                Simpet <span className="text-[#0F766E]">Advisory</span>
              </span>
              <span className="block text-[11px] font-medium tracking-wide text-slate-500 uppercase">
                Financial & Systems Consultants
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive("/") && pathname === "/"
                  ? "text-[#0F766E] bg-teal-50 font-semibold"
                  : "text-slate-700 hover:text-[#12243A] hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-[#0F766E] bg-teal-50 font-semibold"
                  : "text-slate-700 hover:text-[#12243A] hover:bg-slate-50"
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive("/services")
                    ? "text-[#0F766E] bg-teal-50 font-semibold"
                    : "text-slate-700 hover:text-[#12243A] hover:bg-slate-50"
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-[#0F766E]" : "text-slate-400"}`} />
              </button>

              {servicesDropdownOpen && (
                <div 
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-96 rounded-2xl bg-white shadow-xl ring-1 ring-slate-900/10 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-1.5">
                    Our Consulting Practices
                  </div>
                  <div className="space-y-1">
                    {SERVICES.map((srv) => (
                      <Link
                        key={srv.id}
                        href={`/services/${srv.slug}`}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-teal-50 group-hover:bg-teal-100 transition-colors shrink-0">
                          {serviceIcons[srv.id]}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#12243A] group-hover:text-[#0F766E] transition-colors">
                            {srv.title}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">
                            {srv.shortDescription}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100 px-3 py-1.5 flex justify-between items-center bg-slate-50/80 rounded-xl">
                    <span className="text-xs font-medium text-slate-600">Need tailored advisory?</span>
                    <Link
                      href="/contact"
                      className="text-xs font-semibold text-[#0F766E] hover:underline flex items-center gap-1"
                    >
                      Book discovery <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "text-[#0F766E] bg-teal-50 font-semibold"
                  : "text-slate-700 hover:text-[#12243A] hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#0d5d57] shadow-sm hover:shadow-md transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-600"
            >
              Discuss Your Needs
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#12243A] hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal / Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-slate-900/40 backdrop-blur-sm md:hidden">
          <div className="bg-white h-[calc(100vh-65px)] overflow-y-auto px-6 py-6 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className={`px-3 py-2.5 rounded-xl text-base font-medium ${
                    pathname === "/" ? "bg-teal-50 text-[#0F766E] font-semibold" : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className={`px-3 py-2.5 rounded-xl text-base font-medium ${
                    pathname === "/about" ? "bg-teal-50 text-[#0F766E] font-semibold" : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  About Us
                </Link>

                {/* Mobile Services Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-medium text-slate-800 hover:bg-slate-50"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180 text-teal-600" : "text-slate-400"}`} />
                  </button>

                  {mobileServicesOpen && (
                    <div className="mt-1 pl-3 space-y-1 border-l-2 border-teal-100 ml-3">
                      {SERVICES.map((srv) => (
                        <Link
                          key={srv.id}
                          href={`/services/${srv.slug}`}
                          className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50"
                        >
                          {srv.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/contact"
                  className={`px-3 py-2.5 rounded-xl text-base font-medium ${
                    pathname === "/contact" ? "bg-teal-50 text-[#0F766E] font-semibold" : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  Contact
                </Link>
              </nav>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-base font-semibold text-white bg-[#0F766E] hover:bg-[#0d5d57] shadow-md shadow-teal-900/10"
                >
                  Discuss Your Needs
                </Link>
              </div>
            </div>

            {/* Mobile Contact Footer Info */}
            <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-3">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <MapPin className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <span>{COMPANY_INFO.contact.location}</span>
              </div>
              
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <Phone className="w-4 h-4 text-[#0F766E] shrink-0" />
                <div className="flex flex-wrap gap-1 items-center">
                  <a href="tel:+254773100577" className="text-teal-700 underline">0773 100 577</a>
                  <span className="text-slate-400">or</span>
                  <a href="tel:+254750371381" className="text-teal-700 underline">0750 371 381</a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-teal-700 underline">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>

              <div className="pt-2">
                <div className="p-3 rounded-xl bg-[#12243A] text-white flex items-center justify-between">
                  <div>
                    <span className="block text-[11px] font-bold text-white tracking-wide">Authorized Partner</span>
                    <span className="block text-[10px] text-teal-300">Cloud ERP & Accounting</span>
                  </div>
                  <div className="relative w-16 h-7">
                    <Image
                      src="/images/zoho-logo.png"
                      alt="Zoho Authorized Partner"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
