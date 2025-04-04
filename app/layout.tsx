import type React from "react"
import "./globals.css"
import { Mona_Sans as FontSans } from "next/font/google"
import localFont from "next/font/local"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// This is a placeholder for Freight Display Pro - you would need to use a proper serif font
const fontSerif = localFont({
  src: "../public/fonts/placeholder-serif.woff2",
  variable: "--font-serif",
  display: "swap",
  // This is just a placeholder, you would need to replace with the actual font file
})

export const metadata = {
  title: "Invoice Intelligence - Transform document chaos into financial clarity",
  description:
    "Invoice Intelligence harnesses AI precision to automate your financial document processing with old-world attention to detail.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontSerif.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'