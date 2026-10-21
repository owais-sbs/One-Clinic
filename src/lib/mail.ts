import nodemailer from "nodemailer";

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing ${name} environment variable`);
  }
  return value;
}

function firstEnv(...names: string[]) {
  for (const name of names) {
    const value = process.env[name];
    if (value) return value;
  }
  return undefined;
}

export function getMailer() {
  const host = requiredEnv("SMTP_HOST");
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = process.env.SMTP_SECURE === "true";
  const user = requiredEnv("SMTP_USER");
  const pass = (firstEnv("SMTP_PASSWORD", "SMTP_PASS") || "").replace(/\s+/g, "");

  if (!pass) {
    throw new Error("Missing SMTP_PASSWORD or SMTP_PASS environment variable");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export function getEnquiryInbox() {
  return firstEnv("SMTP_NOTIFY_TO", "SMTP_TO") || requiredEnv("SMTP_USER");
}

export function getMailFrom() {
  return process.env.SMTP_FROM || requiredEnv("SMTP_USER");
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function buildEnquiryEmailHtml({
  brand,
  recipientName,
  rows,
  contactEmail,
  contactPhone,
}: {
  brand: string;
  recipientName: string;
  rows: { label: string; value: string; href?: string }[];
  contactEmail: string;
  contactPhone: string;
}) {
  const safeBrand = escapeHtml(brand);
  const safeName = escapeHtml(recipientName);
  const rowHtml = rows
    .map((row, index) => {
      const label = escapeHtml(row.label);
      const value = escapeHtml(row.value || "—").replaceAll("\n", "<br />");
      const content = row.href
        ? `<a href="${escapeHtml(row.href)}" style="color:#3B82F6;text-decoration:none;word-break:break-word;">${value}</a>`
        : value;
      const border = index < rows.length - 1 ? "border-bottom:1px solid #E5E7EB;" : "";
      return `
        <tr>
          <td style="padding:14px 0;${border}">
            <p style="margin:0 0 6px;color:#6B7280;font-size:12px;line-height:1.4;font-weight:600;text-transform:uppercase;letter-spacing:0.04em;">${label}</p>
            <p style="margin:0;color:#111827;font-size:15px;line-height:1.55;font-weight:500;word-break:break-word;">${content}</p>
          </td>
        </tr>
      `;
    })
    .join("");

  const accentDot =
    '<span style="display:inline-block;width:5px;height:5px;background:#3B82F6;margin-left:6px;vertical-align:middle;line-height:0;"></span>';

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${safeBrand}</title>
  </head>
  <body style="margin:0;padding:0;background:#F3F4F6;font-family:Arial,Helvetica,sans-serif;color:#111827;-webkit-text-size-adjust:100%;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F3F4F6;padding:16px 8px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="background:#0F172A;padding:18px 20px;">
                <span style="color:#ffffff;font-size:18px;font-weight:700;letter-spacing:-0.02em;">${safeBrand}</span>${accentDot}
              </td>
            </tr>
            <tr>
              <td style="padding:24px 20px 12px;">
                <h1 style="margin:0 0 14px;font-size:22px;line-height:1.3;color:#111827;">Your request is noted</h1>
                <p style="margin:0 0 10px;font-size:15px;line-height:1.6;color:#374151;">Hi ${safeName},</p>
                <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#374151;">
                  Thank you for contacting ${safeBrand}. Your request has been received and our team will get back to you shortly.
                </p>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #E5E7EB;border-radius:10px;background:#F9FAFB;">
                  <tr>
                    <td style="padding:16px 16px 8px;">
                      <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.08em;color:#3B82F6;text-transform:uppercase;">Your submission</p>
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                        ${rowHtml}
                      </table>
                    </td>
                  </tr>
                </table>
                <p style="margin:20px 0 0;font-size:14px;line-height:1.7;color:#6B7280;">
                  If you need anything urgently, reach us at
                  <a href="mailto:${escapeHtml(contactEmail)}" style="color:#3B82F6;text-decoration:none;word-break:break-word;">${escapeHtml(contactEmail)}</a>
                  or
                  <a href="tel:${escapeHtml(contactPhone.replace(/\s+/g, ""))}" style="color:#3B82F6;text-decoration:none;white-space:nowrap;">${escapeHtml(contactPhone)}</a>.
                </p>
              </td>
            </tr>
            <tr>
              <td style="background:#0F172A;padding:18px 20px;">
                <p style="margin:0 0 10px;color:#ffffff;font-size:14px;font-weight:700;">
                  ${safeBrand}${accentDot}
                </p>
                <p style="margin:0;font-size:12px;line-height:1.7;color:#94A3B8;">
                  <a href="https://onepathsolutions.com/" style="color:#93C5FD;text-decoration:none;">onepathsolutions.com</a><br />
                  <a href="mailto:${escapeHtml(contactEmail)}" style="color:#93C5FD;text-decoration:none;word-break:break-word;">${escapeHtml(contactEmail)}</a><br />
                  <a href="tel:${escapeHtml(contactPhone.replace(/\s+/g, ""))}" style="color:#93C5FD;text-decoration:none;white-space:nowrap;">${escapeHtml(contactPhone)}</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
