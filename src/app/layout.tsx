import type { Metadata } from "next";
import { Jersey_10 } from "next/font/google";
import "./globals.css";

const jersey10 = Jersey_10({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jersey-10"
})

const siteUrl = "https://carbon-decremental-blond.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Carbon Decremental | Reduza o carbono da atmosfera",
    template: "%s | Carbon Decremental",
  },
  description: "Um jogo decremental onde seu objetivo é reduzir as emissões de carbono e salvar a atmosfera da Terra.",
  keywords: [
    "Carbon Decremental",
    "Incremental Game",
    "Idle Game",
    "Clicker",
    "Modding Tree",
    "Jogo de Carbono",
    "Sustentabilidade",
    "Next.js"
  ],
  authors: [
    {name: "Breno Santos Adami", url: "https://github.com/ViajanteDoShopping/ViajanteDoShopping"},
    {name: "João Vitor Pires", url: "https://github.com/ProfJotaVidros/ProfJotaVidros"}
  ],
  creator: "Breno Santos Adami",

  openGraph: { //Facebook, WhatsApp, Discord, LinkedIn
    title: "Carbon Decremental | Reduza o carbono da atmosfera",
    description: "Um jogo decremental onde seu objetivo é reduzir as emissões de carbono e salvar a atmosfera da Terra.",
    url: siteUrl,
    siteName: "Carbon Decremental",
    images: [ //Preview do site (apenas placeholder)
      {
        url:"/og-image-temp.png",
        width: 1200,
        height: 630,
        alt: "Conceito de Carbon Decremental: da poluição industrial para uma Terra limpa."
      }
    ],
    locale: "pt_BR",
    type: "website",
  },

  robots: { //Buscadores
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: { //Ícones do Site (apenas placeholders)
    icon: "/favicon.ico",
    shortcut:"/favicon.ico",
    apple: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jersey10.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
