// app/contact/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me | Web Developer Availability",
  description: "Get in touch for collaboration opportunities, project inquiries, or professional networking.",
  keywords: [
    "contact web developer",
    "hire developer",
    "freelance web developer",
    "developer contact",
    "collaboration inquiry"
  ],
  openGraph: {
    title: "Contact Me | Web Developer Availability",
    description: "Let's discuss your project or collaboration ideas",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}