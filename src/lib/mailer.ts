import { Resend } from "resend";
import { env } from "@/env.mjs";

const resend = new Resend(env.RESEND_API_KEY);

type SendContactParams = {
  name: string;
  email: string;
  message: string;
  company?: string;
  companyWebsite?: string;
  projectType?: string;
  availability?: string;
};

function ensureProtocol(url: string): string {
  if (!url) return url;
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  return `https://${url}`;
}

function formatDateTime(dateTimeStr: string): string {
  try {
    // New format: YYYY-MM-DD|HH:MM|Timezone
    if (dateTimeStr.includes("|")) {
      const [datePart, timePart, timezone] = dateTimeStr.split("|");
      const date = new Date(`${datePart}T${timePart}:00`);
      
      const dateFormatted = date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      
      // Convert to both client's timezone and SAST
      const clientTime = date.toLocaleTimeString("en-US", {
        timeZone: timezone,
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
      
      const sastTime = date.toLocaleTimeString("en-US", {
        timeZone: "Africa/Johannesburg",
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
      
      const timezoneName = timezone.split("/").pop()?.replace(/_/g, " ") || timezone;
      
      // Show both times if they're different
      if (timezone !== "Africa/Johannesburg") {
        return `${dateFormatted} at ${clientTime} ${timezoneName} (${sastTime} SAST)`;
      } else {
        return `${dateFormatted} at ${sastTime} SAST`;
      }
    }
    
    // Old format fallback: YYYY-MM-DD HH:MM
    if (dateTimeStr.includes(" ") && dateTimeStr.includes(":")) {
      const [datePart, timePart] = dateTimeStr.split(" ");
      const date = new Date(`${datePart}T${timePart}`);
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }) + " at " + timePart;
    }
    
    return dateTimeStr;
  } catch {
    return dateTimeStr;
  }
}

export async function sendContactEmail(params: SendContactParams) {
  if (!env.RESEND_API_KEY || !env.RESEND_FROM_EMAIL) {
    console.info("Resend not configured. Logging contact form submission:", params);
    return;
  }

  try {
    // Send notification email to you
    const { data, error } = await resend.emails.send({
      from: env.RESEND_FROM_EMAIL,
      to: env.RESEND_FROM_EMAIL,
      subject: `New inquiry from ${params.name}`,
      replyTo: params.email,
      html: renderContactEmail(params),
      text: renderContactEmailText(params),
    });

    if (error) {
      console.error("Failed to send contact email", error);
      throw new Error(`Failed to send contact email: ${error.message}`);
    }

    console.log("Contact email sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Failed to send contact email", error);
    throw new Error("Failed to send contact email");
  }
}

function renderContactEmail(params: SendContactParams) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Project Inquiry</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            background-color: #f9fafb;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 32px 24px;
            text-align: center;
            color: #ffffff;
          }
          .header h1 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 8px;
            letter-spacing: -0.5px;
          }
          .header p {
            font-size: 14px;
            opacity: 0.95;
            font-weight: 500;
          }
          .content {
            padding: 32px 24px;
          }
          .field {
            margin-bottom: 24px;
            padding-bottom: 24px;
            border-bottom: 1px solid #e5e7eb;
          }
          .field:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
          }
          .label {
            display: block;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #6b7280;
            margin-bottom: 8px;
          }
          .value {
            font-size: 16px;
            color: #1f2937;
            font-weight: 500;
          }
          .value a {
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
          }
          .value a:hover {
            text-decoration: underline;
          }
          .message-box {
            background: #f9fafb;
            padding: 16px;
            border-radius: 8px;
            border-left: 4px solid #667eea;
            white-space: pre-wrap;
            font-size: 15px;
            line-height: 1.7;
            color: #374151;
          }
          .footer {
            background-color: #f9fafb;
            padding: 24px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
          }
          .footer p {
            font-size: 13px;
            color: #6b7280;
            margin-bottom: 8px;
          }
          .badge {
            display: inline-block;
            background: #ede9fe;
            color: #5b21b6;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 13px;
            font-weight: 600;
            margin-top: 4px;
          }
          @media (max-width: 600px) {
            body { padding: 0; }
            .container { border-radius: 0; }
            .content { padding: 24px 16px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎯 New Project Inquiry</h1>
            <p>You've received a new message from your portfolio website</p>
          </div>
          
          <div class="content">
            <div class="field">
              <span class="label">Contact Person</span>
              <div class="value">${params.name}</div>
            </div>
            
            <div class="field">
              <span class="label">Email Address</span>
              <div class="value">
                <a href="mailto:${params.email}">${params.email}</a>
              </div>
            </div>
            
            ${params.company ? `
            <div class="field">
              <span class="label">Company</span>
              <div class="value">${params.company}</div>
            </div>
            ` : ""}
            
            ${params.companyWebsite ? `
            <div class="field">
              <span class="label">Company Website</span>
              <div class="value">
                <a href="${ensureProtocol(params.companyWebsite)}" target="_blank" rel="noopener noreferrer" style="color: #667eea; text-decoration: underline;">${params.companyWebsite}</a>
              </div>
            </div>
            ` : ""}
            
            ${params.projectType ? `
            <div class="field">
              <span class="label">Project Type</span>
              <div class="value">
                <span class="badge">${params.projectType}</span>
              </div>
            </div>
            ` : ""}
            
            ${params.availability ? `
            <div class="field">
              <span class="label">Preferred Call Time</span>
              <div class="value">${formatDateTime(params.availability)}</div>
            </div>
            ` : ""}
            
            <div class="field">
              <span class="label">Message</span>
              <div class="message-box">${params.message}</div>
            </div>
          </div>
          
          <div class="footer">
            <p><strong>💡 Quick Tip:</strong> Click "Reply" to respond directly to ${params.name}</p>
            <p style="margin-top: 16px; color: #9ca3af; font-size: 12px;">
              Sent from your SiteSmith portfolio contact form
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}

function renderContactEmailText(params: SendContactParams) {
  const sections = [
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "🎯 NEW PROJECT INQUIRY",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "",
    "CONTACT PERSON",
    params.name,
    "",
    "EMAIL ADDRESS",
    params.email,
  ];

  if (params.company) {
    sections.push("", "COMPANY", params.company);
  }

  if (params.companyWebsite) {
    sections.push("", "COMPANY WEBSITE", params.companyWebsite);
  }

  if (params.projectType) {
    sections.push("", "PROJECT TYPE", params.projectType);
  }

  if (params.availability) {
    sections.push("", "PREFERRED CALL TIME", formatDateTime(params.availability));
  }

  sections.push(
    "",
    "MESSAGE",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    params.message,
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "",
    "💡 Reply to this email to respond directly to " + params.name,
    "",
    "Sent from your SiteSmith portfolio contact form"
  );

  return sections.join("\n");
}

