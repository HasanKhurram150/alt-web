import { z } from "zod";

export const contactFormSchema = z.object({
  formType: z.enum(["individual", "corporation"]),
  companyName: z.string().optional(),
  industry: z.string().min(1, "Industry selection or description is required"),
  idea: z.string()
    .min(1, "Please describe your idea or project")
    .min(10, "Please provide a bit more detail (minimum 10 characters)"),
  email: z.string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),
  phone: z.string()
    .min(1, "Mobile number is required")
    .refine((val) => {
      const cleanPhone = val.replace(/[^0-9+]/g, "");
      return cleanPhone.length >= 6;
    }, {
      message: "Please enter a valid mobile number",
    }),
}).superRefine((data, ctx) => {
  if (data.formType === "corporation" && (!data.companyName || !data.companyName.trim())) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Company name is required",
      path: ["companyName"],
    });
  }
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
