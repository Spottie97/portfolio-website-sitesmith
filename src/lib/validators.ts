import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(20, "Share a bit more context"),
  projectType: z.string().optional(),
  availability: z.string().optional(),
  honeypot: z.string().max(0),
  elapsed: z.string().refine((value) => Number.parseInt(value, 10) > 1500, {
    message: "Submission too fast",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

