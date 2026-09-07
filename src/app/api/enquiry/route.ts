import { NextResponse } from "next/server";
import { escapeHtml, getEnquiryInbox, getMailFrom, getMailer } from "@/lib/mail";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type EnquiryType = "demo" | "newsletter";

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

  const type = (asString(body.type) || "demo") as EnquiryType;
  const email = asString(body.email);

  if (type !== "demo" && type !== "newsletter") {
    return invalid("Unknown form type.");
  }

  if (!emailPattern.test(email)) {
    return invalid("Please enter a valid email address.");
  }

  if (type === "newsletter") {
    try {
      await sendMail({
        subject: `New newsletter signup: ${email}`,
        replyTo: email,
        text: `A visitor subscribed to the One Clinic newsletter.\n\nEmail: ${email}`,
        html: `
          <h2>New newsletter signup</h2>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        `,
      });
      return NextResponse.json({ ok: true });
    } catch (error) {
      console.error("Failed to send newsletter email", error);
      return invalid("Unable to send your request right now. Please try again.", 500);
    }
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

  try {
    await sendMail({
      subject: `New demo request from ${name}`,
      replyTo: email,
      text: [
        "A new software demo request was submitted.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Clinic / Hospital: ${clinic}`,
        `Message: ${message || "(none)"}`,
      ].join("\n"),
      html: `
        <h2>New software demo request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Clinic / Hospital:</strong> ${escapeHtml(clinic)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message || "(none)").replaceAll("\n", "<br />")}</p>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send demo enquiry", error);
    return invalid("Unable to send your request right now. Please try again.", 500);
  }
}

async function sendMail({
  subject,
  replyTo,
  text,
  html,
}: {
  subject: string;
  replyTo: string;
  text: string;
  html: string;
}) {
  const transporter = getMailer();
  await transporter.sendMail({
    from: getMailFrom(),
    to: getEnquiryInbox(),
    replyTo,
    subject,
    text,
    html,
  });
}
