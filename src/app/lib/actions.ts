"use server";
import { z } from "zod";
import { receipiant } from "./data";
import { EmailTemp } from "../ui/components/EmailTemp";
import { Resend } from "resend";

export const emailSubmission = async (prevState: any, formData: FormData) => {
  const reg = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
  const resend = new Resend(process.env.RESEND_API_KEY);
  const isValid = z
    .object({
      subject: z.string().trim().min(1, "Must enter subject"),
      first: z.string().trim().min(1, "Must enter first name"),
      last: z.string().trim().min(1, "Must enter a last name"),
      email: z.string().email({ message: "Must be an valid email address" }),
      phone: z
        .string()
        .regex(reg, "Must be a valid phone number separated by hyphen")
        .min(10, "Must enter a phone number"),
      message: z.string().trim().min(1, "Must enter a message"),
    })
    .safeParse({
      subject: formData.get("subject"),
      first: formData.get("name"),
      last: formData.get("last"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    });

  if (!isValid.success) {
    return { error: isValid.error.flatten().fieldErrors };
  } else {
    const { phone, subject, first, last, email, message } = isValid.data;

    await resend.emails.send({
      from: "estimates@resend.dev",
      to: [receipiant],
      subject: `NEW ESTIMATE REQUEST FROM ${first} ${last}`,
      react: EmailTemp({ first, last, message, phone, subject, email }),
    });

    return { error: null };
  }
};
