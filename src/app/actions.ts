"use server";

import { FormValues } from "@/components/ui/QuoteForm";
import { Resend } from "resend";
import { QuoteConfirmationEmail } from "@/components/emails/quote-confirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

export const submitForm = async (values: FormValues) => {
  console.log(values);
  const { error } = await resend.emails.send({
    from: "matt@mattech.fyi",
    to: values.email,
    bcc: "matt@mattech.fyi",
    subject: "re: Quote Request",
    react: QuoteConfirmationEmail({ ...values }),
  });

  if (error) {
    console.error(error);
    throw new Error(error.message || "An unknown error occurred");
  }
};
