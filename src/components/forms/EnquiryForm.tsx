"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  Send, 
  Loader2, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck,
  Building,
  User,
  MessageSquare
} from "lucide-react";
import { SERVICES, COMPANY_INFO } from "@/content/company";

export default function EnquiryForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [serviceId, setServiceId] = useState(preselectedService);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    preferredContact: "email",
    message: "",
    // Progressive conditional fields
    eventType: "corporate-training",
    audienceSize: "20-50",
    currentSystem: "excel",
    taxConcern: "monthly-compliance",
    // Honeypot field
    website: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService && SERVICES.some(s => s.id === preselectedService)) {
      setServiceId(preselectedService);
    }
  }, [preselectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Full name is required (min 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!serviceId) {
      errs.serviceId = "Please select a service interest.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Please include a message describing your requirements (min 10 characters).";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          serviceId,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push(`/thank-you?ref=${encodeURIComponent(data.referenceId || "CONFIRMED")}`);
      } else {
        setServerError(data.message || "Failed to submit enquiry. Please call us directly.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setServerError("Network connection issue. Please contact us via telephone or email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg shadow-slate-900/5">
      
      {serverError && (
        <div className="mb-8 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="text-sm">
            <span className="font-semibold block">{serverError}</span>
            <span>You can reach Catherine Mwangi directly at {COMPANY_INFO.contact.phoneDisplay} or {COMPANY_INFO.contact.email}.</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        
        {/* Anti-spam Honeypot (Hidden) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website (Leave blank)</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        {/* 1. Service Selection */}
        <div>
          <label htmlFor="service-select" className="block text-sm font-bold text-[#12243A] mb-2">
            Area of Practice Interest <span className="text-rose-500">*</span>
          </label>
          <select
            id="service-select"
            value={serviceId}
            onChange={(e) => {
              setServiceId(e.target.value);
              if (errors.serviceId) setErrors(prev => ({ ...prev, serviceId: "" }));
            }}
            className={`w-full rounded-xl border px-4 py-3 text-sm font-medium bg-slate-50 focus:bg-white transition-all outline-none focus:ring-2 ${
              errors.serviceId
                ? "border-rose-400 focus:ring-rose-400"
                : "border-slate-300 focus:border-teal-600 focus:ring-teal-600/20"
            }`}
          >
            <option value="">-- Choose a Consulting Service --</option>
            {SERVICES.map((srv) => (
              <option key={srv.id} value={srv.id}>
                {srv.title}
              </option>
            ))}
          </select>
          {errors.serviceId && (
            <p className="mt-1 text-xs text-rose-600 font-medium">{errors.serviceId}</p>
          )}
        </div>

        {/* 2. Core Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g. Sarah Kimani"
              value={formData.name}
              onChange={handleChange}
              className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all ${
                errors.name
                  ? "border-rose-400 focus:ring-2 focus:ring-rose-400"
                  : "border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
              }`}
            />
            {errors.name && <p className="mt-1 text-xs text-rose-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="e.g. sarah@company.co.ke"
              value={formData.email}
              onChange={handleChange}
              className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all ${
                errors.email
                  ? "border-rose-400 focus:ring-2 focus:ring-rose-400"
                  : "border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
              }`}
            />
            {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
              Phone / Mobile (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+254 7XX XXX XXX"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 transition-all"
            />
          </div>

          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-1.5">
              Company / Institution (Optional)
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              placeholder="e.g. Apex Enterprises Ltd"
              value={formData.organization}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 transition-all"
            />
          </div>
        </div>

        {/* 3. PROGRESSIVE DISCLOSURE CONDITIONAL FIELDS */}
        {serviceId === "staff-training-empowerment" && (
          <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200/80 space-y-4 animate-in fade-in duration-200">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
              Training & Empowerment Specifics
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Format / Session Type
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-teal-300 bg-white px-3 py-2 text-xs font-medium outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="corporate-training">Corporate Financial Literacy Masterclass</option>
                  <option value="keynote-talk">Keynote Empowerment Talk (Conference/Retreat)</option>
                  <option value="modular-series">Modular Multi-Week Staff Program</option>
                  <option value="executive-briefing">Finance for Non-Financial Executives</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Estimated Participant Count
                </label>
                <select
                  name="audienceSize"
                  value={formData.audienceSize}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-teal-300 bg-white px-3 py-2 text-xs font-medium outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="under-20">Under 20 participants</option>
                  <option value="20-50">20 – 50 participants</option>
                  <option value="50-100">50 – 100 participants</option>
                  <option value="100-plus">100+ attendees (Large conference)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {serviceId === "zoho-books-erp-consultancy" && (
          <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200/80 space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
                Systems & Migration Details
              </div>
              <div className="relative w-16 h-5 shrink-0 bg-[#12243A] p-0.5 rounded border border-slate-700">
                <Image
                  src="/images/zoho-logo.png"
                  alt="Zoho"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Current Accounting System
                </label>
                <select
                  name="currentSystem"
                  value={formData.currentSystem}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-teal-300 bg-white px-3 py-2 text-xs font-medium outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="excel">Excel Spreadsheets / Manual</option>
                  <option value="quickbooks">QuickBooks Desktop / Online</option>
                  <option value="sage">Sage / Pastel</option>
                  <option value="zoho-existing">Already on Zoho (Optimization needed)</option>
                  <option value="other">Other legacy accounting tool</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Target Implementation Scope
                </label>
                <select
                  name="audienceSize"
                  value={formData.audienceSize}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-teal-300 bg-white px-3 py-2 text-xs font-medium outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="new-setup">Fresh Zoho Books Setup & Invoicing</option>
                  <option value="migration">Historical Ledger Data Migration</option>
                  <option value="training-only">Staff User Onboarding & Training</option>
                  <option value="full-turnkey">Full Turnkey Setup + Migration + Retainer</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {serviceId === "tax-statutory-consultancy" && (
          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-900">
                KRA Statutory Focus
              </div>
              <div className="relative w-24 h-5 shrink-0 bg-white p-0.5 rounded border border-amber-200">
                <Image
                  src="/images/kra-logo.png"
                  alt="Kenya Revenue Authority"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Primary Tax Priority
              </label>
              <select
                name="taxConcern"
                value={formData.taxConcern}
                onChange={handleChange}
                className="w-full rounded-xl border border-amber-300 bg-white px-3 py-2 text-xs font-medium outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="monthly-compliance">Monthly Compliance (VAT, PAYE, Housing Levy, NSSF)</option>
                <option value="corporate-tax">Annual Corporate Income Tax Return & Installments</option>
                <option value="tax-audit-notice">KRA Audit / Desk Review / Penalty Notice</option>
                <option value="tax-health-check">Complete Tax Health Check & TCC Renewal</option>
              </select>
            </div>
          </div>
        )}

        {/* 4. Preferred Contact Method */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Preferred Method of Response
          </label>
          <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-700">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="preferredContact"
                value="email"
                checked={formData.preferredContact === "email"}
                onChange={handleChange}
                className="text-teal-600 focus:ring-teal-500"
              />
              <span>Official Email</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="preferredContact"
                value="phone"
                checked={formData.preferredContact === "phone"}
                onChange={handleChange}
                className="text-teal-600 focus:ring-teal-500"
              />
              <span>Phone Call</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="preferredContact"
                value="whatsapp"
                checked={formData.preferredContact === "whatsapp"}
                onChange={handleChange}
                className="text-teal-600 focus:ring-teal-500"
              />
              <span>WhatsApp Message</span>
            </label>
          </div>
        </div>

        {/* 5. Message Description */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
            Describe Your Requirements <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Please share specific context, timelines, or challenges you'd like us to address..."
            value={formData.message}
            onChange={handleChange}
            className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all ${
              errors.message
                ? "border-rose-400 focus:ring-2 focus:ring-rose-400"
                : "border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
            }`}
          />
          {errors.message && <p className="mt-1 text-xs text-rose-600">{errors.message}</p>}
        </div>

        {/* Privacy Note */}
        <p className="text-sm text-slate-500 leading-relaxed">
          🔒 Your information is confidential. We do not request bank credentials or passwords through this website. Submissions are governed by our{" "}
          <a href="/privacy" className="text-teal-700 underline">Privacy Policy</a>.
        </p>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-[#0F766E] hover:bg-teal-700 shadow-md shadow-teal-900/10 hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                <span>Logging Your Enquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Consultation Request</span>
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </button>
        </div>

      </form>
    </div>
  );
}
