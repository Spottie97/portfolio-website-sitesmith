import { Resend } from "resend";
import { env } from "@/env.mjs";

const resend = new Resend(env.RESEND_API_KEY);

type SendContactParams = {
  name: string;
  email: string;
  message: string;
  company?: string;
  projectType?: string;
  availability?: string;
};

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

    // Send auto-reply to the user
    await sendAutoReply(params);

    console.log("Contact email sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Failed to send contact email", error);
    throw new Error("Failed to send contact email");
  }
}

async function sendAutoReply(params: SendContactParams) {
  if (!env.RESEND_FROM_EMAIL) {
    console.info("RESEND_FROM_EMAIL not configured. Skipping auto-reply.");
    return;
  }

  try {
    await resend.emails.send({
      from: env.RESEND_FROM_EMAIL,
      to: params.email,
      subject: "Thank you for your inquiry - SiteSmith",
      html: renderAutoReplyEmail(params),
      text: renderAutoReplyEmailText(params),
    });
  } catch (error) {
    console.error("Failed to send auto-reply email", error);
    // Don't throw here - auto-reply failure shouldn't break the main flow
  }
}

function renderContactEmail(params: SendContactParams) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Project Inquiry</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: 600; color: #495057; }
          .value { margin-top: 5px; }
          .message { background: #f8f9fa; padding: 15px; border-radius: 6px; white-space: pre-wrap; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>New Project Inquiry</h1>
        </div>
        
        <div class="field">
          <div class="label">Name:</div>
          <div class="value">${params.name}</div>
        </div>
        
        <div class="field">
          <div class="label">Email:</div>
          <div class="value"><a href="mailto:${params.email}">${params.email}</a></div>
        </div>
        
        ${params.company ? `
        <div class="field">
          <div class="label">Company:</div>
          <div class="value">${params.company}</div>
        </div>
        ` : ""}
        
        ${params.projectType ? `
        <div class="field">
          <div class="label">Project Type:</div>
          <div class="value">${params.projectType}</div>
        </div>
        ` : ""}
        
        ${params.availability ? `
        <div class="field">
          <div class="label">Preferred Call Time:</div>
          <div class="value">${params.availability}</div>
        </div>
        ` : ""}
        
        <div class="field">
          <div class="label">Message:</div>
          <div class="value message">${params.message}</div>
        </div>
      </body>
    </html>
  `;
}

function renderContactEmailText(params: SendContactParams) {
  return `
New Project Inquiry

Name: ${params.name}
Email: ${params.email}
${params.company ? `Company: ${params.company}` : ""}
${params.projectType ? `Project Type: ${params.projectType}` : ""}
${params.availability ? `Preferred Call Time: ${params.availability}` : ""}

Message:
${params.message}
  `.trim();
}

function renderAutoReplyEmail(params: SendContactParams) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Thank you for your inquiry</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: center; }
          .content { margin-bottom: 20px; }
          .footer { border-top: 1px solid #e9ecef; padding-top: 20px; font-size: 14px; color: #6c757d; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Thank you for your inquiry!</h1>
        </div>
        
        <div class="content">
          <p>Hi ${params.name},</p>
          
          <p>Thank you for reaching out to SiteSmith. I've received your project inquiry and I'm excited to learn more about your vision.</p>
          
          <p>I'll review your message carefully and get back to you within one business day with:</p>
          <ul>
            <li>Initial thoughts on your project</li>
            <li>Questions to better understand your needs</li>
            <li>Next steps for moving forward</li>
          </ul>
          
          <p>In the meantime, feel free to explore my <a href="${env.NEXT_PUBLIC_SITE_URL}/projects">portfolio</a> to see examples of similar projects I've delivered.</p>
          
          <p>Best regards,<br>
          Reinhardt</p>
        </div>
        
        <div class="footer">
          <p>SiteSmith - Custom Web Solutions</p>
          <p><a href="${env.NEXT_PUBLIC_SITE_URL}">${env.NEXT_PUBLIC_SITE_URL}</a></p>
        </div>
      </body>
    </html>
  `;
}

function renderAutoReplyEmailText(params: SendContactParams) {
  return `
Thank you for your inquiry!

Hi ${params.name},

Thank you for reaching out to SiteSmith. I've received your project inquiry and I'm excited to learn more about your vision.

I'll review your message carefully and get back to you within one business day with:
- Initial thoughts on your project
- Questions to better understand your needs
- Next steps for moving forward

In the meantime, feel free to explore my portfolio at ${env.NEXT_PUBLIC_SITE_URL}/projects to see examples of similar projects I've delivered.

Best regards,
Reinhardt

---
SiteSmith - Custom Web Solutions
${env.NEXT_PUBLIC_SITE_URL}
  `.trim();
}

