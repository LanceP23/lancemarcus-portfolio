"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "./button"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Loading theme">
        <div className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={`Toggle ${resolvedTheme} mode`}
      className="relative overflow-hidden"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={resolvedTheme}
          initial={{ 
            opacity: 0,
            rotate: resolvedTheme === "dark" ? -90 : 90,
            scale: 0.5
          }}
          animate={{ 
            opacity: 1,
            rotate: 0,
            scale: 1
          }}
          exit={{ 
            opacity: 0,
            rotate: resolvedTheme === "dark" ? 90 : -90,
            scale: 0.5
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {resolvedTheme === "dark" ? (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          )}
        </motion.div>
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}