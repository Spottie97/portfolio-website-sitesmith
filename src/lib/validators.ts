import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  companyWebsite: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val || val === "") return true;
        // Accept URLs with or without protocol
        const urlPattern = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
        return urlPattern.test(val);
      },
      { message: "Enter a valid website URL" }
    ),
  message: z.string().min(20, "Share a bit more context"),
  projectType: z.string().optional(),
  availability: z.string().optional(),
  honeypot: z.string().max(0),
  elapsed: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true;
        const elapsedMs = parseInt(val, 10);
        // Reject submissions faster than 1 second (likely bots)
        return elapsedMs >= 1000;
      },
      { message: "Submission too fast" }
    ),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

