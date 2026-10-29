import { NextResponse } from "next/server";

interface EnquiryPayload {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  serviceId: string;
  preferredContact?: string;
  message: string;
  // Conditional fields
  eventType?: string;
  audienceSize?: string;
  currentSystem?: string;
  taxConcern?: string;
  // Honeypot field for spam prevention
  website?: string;
}

export async function POST(request: Request) {
  try {
    const body: EnquiryPayload = await request.json();

    // 1. Honeypot check: If the hidden 'website' field was filled, silently discard spam
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json(
        { success: true, message: "Enquiry submitted successfully.", referenceId: "REF-SPAM-PREVENTED" },
        { status: 200 }
      );
    }

    // 2. Server-side validation
    const errors: Record<string, string> = {};

    if (!body.name || body.name.trim().length < 2) {
      errors.name = "Full name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email)) {
      errors.email = "Please provide a valid business email address.";
    }

    if (!body.serviceId || body.serviceId.trim().length === 0) {
      errors.serviceId = "Please select a service interest.";
    }

    if (!body.message || body.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters detailing your requirements.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // 3. Generate unique reference ID
    const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
    const timestamp = Date.now().toString().slice(-6);
    const referenceId = `SA-${timestamp}-${randomSuffix}`;

    // 4. Log enquiry for administrative follow-up
    console.log(`[SIMPET ADVISORY ENQUIRY] Ref: ${referenceId}`);
    console.log(`From: ${body.name} <${body.email}> (${body.phone || "No phone"})`);
    console.log(`Organization: ${body.organization || "Independent"}`);
    console.log(`Service Interest: ${body.serviceId}`);
    console.log(`Conditional Details:`, {
      eventType: body.eventType,
      audienceSize: body.audienceSize,
      currentSystem: body.currentSystem,
      taxConcern: body.taxConcern,
    });
    console.log(`Message: ${body.message}`);

    // In a production environment with SMTP configured, this sends to Catherine Mwangi:
    // catherine@simpetadvisory.com

    return NextResponse.json(
      {
        success: true,
        referenceId,
        message: "Enquiry successfully logged. Our lead consultant will contact you within 24 business hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[ENQUIRY API ERROR]", error);
    return NextResponse.json(
      { success: false, message: "An unexpected server error occurred. Please call our Nairobi office directly." },
      { status: 500 }
    );
  }
}
