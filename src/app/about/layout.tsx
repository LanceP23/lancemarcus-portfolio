// app/about/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Professional Web Developer",
  description: "Learn about my journey as a web developer...",
  keywords: ["web developer", "about me", "developer portfolio"],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}