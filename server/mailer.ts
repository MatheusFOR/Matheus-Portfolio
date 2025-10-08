import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

interface SendMailProps {
  to: string;
  subject: string;
  text: string;
}

export async function sendMail({ to, subject, text }: SendMailProps): Promise<void> {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });
  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to,
    subject,
    text,
  });
}
