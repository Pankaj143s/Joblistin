import type { Metadata } from "next"
import { Poppins } from "next/font/google"   /* ← 1️⃣  swap Inter → Poppins */
import "./globals.css"

/* 2️⃣  Load every weight you use (300-700 were requested earlier) */
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",     // 3️⃣  pipes into our Tailwind var
})

export const metadata: Metadata = {
  title: "Joblistin - Connecting Talent with Opportunity",
  description:
    "Joblistin is a professional recruitment consultancy firm specializing in permanent staffing, contract hiring, executive search, and HR consulting services.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    /* 4️⃣  Apply the Poppins class from next/font/google */
    <html lang="en" className={poppins.variable}>
      <body >{children}</body>
    </html>
  )
}
