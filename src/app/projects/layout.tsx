// app/projects/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Projects | Web Developer Portfolio",
  description: "Explore my collection of web development projects, case studies, and technical implementations.",
  keywords: [
    "web development projects", 
    "portfolio", 
    "case studies",
    "web applications",
    "coding projects"
  ],
  openGraph: {
    title: "My Projects | Web Developer Portfolio",
    description: "Collection of my best web development work and case studies",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}