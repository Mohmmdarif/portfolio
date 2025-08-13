"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, []);

  const isDark = mounted && theme === "dark"

  return (
    <Button variant="outline" size="icon" className="lg:w-14 lg:h-14 lg:rounded-full" aria-label="Toggle theme" onClick={() => setTheme(isDark ? "light" : "dark")}>
      {!mounted ? (
        <Sun className="h-[1.3rem] w-[1.3rem] opacity-0" />
      ) : isDark ? (
        <Sun className="h-[1.3rem] w-[1.3rem] rotate-0 scale-100 transition-all" />
      ) : (
        <Moon className="h-[1.3rem] w-[1.3rem] rotate-0 scale-100 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
