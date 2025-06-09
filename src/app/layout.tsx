// app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ThemeWrapper from "./ThemeWrapper"
import Navbar from "@/components/NavBar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Get to know me and my work",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <html lang="en" suppressHydrationWarning>
   <body
  className={`${inter.className} bg-background text-foreground transition-colors duration-300 antialiased min-h-screen`}
  suppressHydrationWarning
>
      <ThemeWrapper>
        <Navbar />
        {children}
      </ThemeWrapper>
    </body>
  </html>
)
}