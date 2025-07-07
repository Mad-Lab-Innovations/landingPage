import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MaybeWith - Missions dans l'hospitalité en temps réel",
  description:
    "L'app qui connecte établissements et collaborateurs grâce à la géolocalisation. Trouvez des missions dans les restaurants, bars, cafés et hôtels.",
  keywords: "hospitalité, missions, restaurant, bar, café, hôtel, géolocalisation, recrutement",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
