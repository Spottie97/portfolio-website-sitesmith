import { NextResponse } from "next/server";

import { contactFormSchema } from "@/lib/validators";
import { sendContactEmail } from "@/lib/mailer";

export const runtime = "edge";

export async function POST(request: Request) {
  const data = await request.json();

  const parsed = contactFormSchema.safeParse(data);

  if (!parsed.success) {
    return NextResponse.json({ success: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  const payload = parsed.data;

  try {
    await sendContactEmail({
      name: payload.name,
      email: payload.email,
      message: payload.message,
      company: payload.company,
      projectType: payload.projectType,
      availability: payload.availability,
    });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 202 });
}

