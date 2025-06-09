"use client";

import ThemeProvider from "@/components/theme/theme-provider";
import { useEffect, useState } from "react";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="inherit-all">{children}</div>;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false} 
    >
      <div className="theme-transition">
        {children}
      </div>
    </ThemeProvider>
  );
}