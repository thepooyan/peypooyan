import type React from "react"
import type { Metadata } from "next"
import { Vazirmatn } from "next/font/google";
import "@/styles/globals.css"

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"]
})

export const metadata: Metadata = {
  title: "آزمایشگاه خاک و بتن پی پویان",
  description: "دارای پروانه اشتغال از وزارت راه و شهرسازی",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} ${vazirmatn.className}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
