"use client"

import { Button } from "@/components/ui/button"

interface ContactButtonProps {
  className?: string
}

export default function ContactButton({ className = "" }: ContactButtonProps) {
  const handleClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScxXmeqT-D75qV3J-3ckrTJuIW-YcMyS8uzcuObxYpoVZ655A/viewform?usp=dialog",
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className={`border-fuchsia-500/50 bg-transparent text-white hover:bg-fuchsia-500/10 ${className}`}
      onClick={handleClick}
    >
      Contact
    </Button>
  )
}

