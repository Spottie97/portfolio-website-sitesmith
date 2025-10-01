import { describe, expect, it } from "vitest";
import { contactFormSchema } from "@/lib/validators";

describe("Contact Form Validation", () => {
  it("validates correct contact form data", () => {
    const validData = {
      name: "John Farmer",
      email: "john@farm.com",
      message: "I need help with farm management software for my operation.",
      honeypot: "",
      elapsed: "2000",
    };

    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("rejects too-short messages", () => {
    const invalidData = {
      name: "John",
      email: "john@farm.com",
      message: "Short message",
      honeypot: "",
      elapsed: "2000",
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it("detects bot submissions (too fast)", () => {
    const botData = {
      name: "Bot",
      email: "bot@spam.com",
      message: "This is a spam message with enough characters.",
      honeypot: "",
      elapsed: "500",
    };

    const result = contactFormSchema.safeParse(botData);
    expect(result.success).toBe(false);
  });

  it("detects honeypot filled", () => {
    const botData = {
      name: "Human",
      email: "real@email.com",
      message: "This is a legitimate message with enough text.",
      honeypot: "spam content",
      elapsed: "2000",
    };

    const result = contactFormSchema.safeParse(botData);
    expect(result.success).toBe(false);
  });
});




