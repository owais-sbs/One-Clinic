import { NextResponse } from "next/server";
import {
  buildEnquiryEmailHtml,
  escapeHtml,
  getEnquiryInbox,
  getMailFrom,
  getMailer,
} from "@/lib/mail";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function invalid(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return invalid("Invalid request body.");
  }

  const type = asString(body.type) || "demo";
  const email = asString(body.email);

  if (type !== "demo") {
    return invalid("Unknown form type.");
  }

  if (!emailPattern.test(email)) {
    return invalid("Please enter a valid email address.");
  }

  const name = asString(body.name);
  const clinic = asString(body.clinic);
  const message = asString(body.message);

  if (name.length < 2) {
    return invalid("Please enter your full name.");
  }

  if (clinic.length < 2) {
    return invalid("Please enter your clinic or hospital name.");
  }

  const rows = [
    { label: "Name", value: name },
    { label: "Email", value: email, href: `mailto:${email}` },
    { label: "Clinic", value: clinic },
    { label: "Message", value: message || "(none)" },
  ];

  const text = [
    "A new software demo request was submitted.",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Clinic / Hospital: ${clinic}`,
    `Message: ${message || "(none)"}`,
  ].join("\n");

  const confirmationHtml = buildEnquiryEmailHtml({
    brand: siteConfig.name,
    recipientName: name,
    rows,
    contactEmail: siteConfig.email,
    contactPhone: siteConfig.phone,
  });

  const notifyHtml = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#111827;">
      <h2 style="margin:0 0 12px;">New software demo request</h2>
      <p style="margin:0 0 8px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="margin:0 0 8px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="margin:0 0 8px;"><strong>Clinic / Hospital:</strong> ${escapeHtml(clinic)}</p>
      <p style="margin:0 0 8px;"><strong>Message:</strong></p>
      <p style="margin:0;">${escapeHtml(message || "(none)").replaceAll("\n", "<br />")}</p>
    </div>
  `;

  try {
    const transporter = getMailer();
    const from = getMailFrom();
    const inbox = getEnquiryInbox();

    await Promise.all([
      transporter.sendMail({
        from,
        to: inbox,
        replyTo: email,
        subject: `New demo request from ${name}`,
        text,
        html: notifyHtml,
      }),
      transporter.sendMail({
        from,
        to: email,
        subject: `Your request is noted — ${siteConfig.name}`,
        text: [
          `Hi ${name},`,
          "",
          `Thank you for contacting ${siteConfig.name}. Your request has been received and our team will get back to you shortly.`,
          "",
          "Your submission",
          `Name: ${name}`,
          `Email: ${email}`,
          `Clinic / Hospital: ${clinic}`,
          `Message: ${message || "(none)"}`,
          "",
          `If you need anything urgently, reach us at ${siteConfig.email} or ${siteConfig.phone}.`,
        ].join("\n"),
        html: confirmationHtml,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send demo enquiry", error);
    return invalid("Unable to send your request right now. Please try again.", 500);
  }
}
