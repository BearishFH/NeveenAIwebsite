"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ActionButtonProps {
  className?: string
  children: React.ReactNode
}

export default function ActionButton({ className = "", children }: ActionButtonProps) {
  const handleClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScxXmeqT-D75qV3J-3ckrTJuIW-YcMyS8uzcuObxYpoVZ655A/viewform?usp=dialog",
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <Button variant="ghost" className={`text-white/70 hover:text-white ${className}`} onClick={handleClick}>
      {children} <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  )
}

