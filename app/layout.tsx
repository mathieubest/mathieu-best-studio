import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mathieu Best Studio | Développement d'applications mobiles et solutions numériques",
    template: "%s | Mathieu Best Studio",
  },
  description:
    "Mathieu Best Studio accompagne les entreprises dans la conception et le développement de solutions numériques modernes : applications iOS, Android, logiciels métier, plateformes web et intelligence artificielle.",
  keywords: [
    "développement application mobile",
    "développement iOS",
    "développement Android",
    "application sur mesure",
    "logiciel métier",
    "intelligence artificielle",
    "développement web",
    "Mathieu Best Studio",
    "freelance développement",
    "solution numérique",
  ],
  authors: [{ name: "Mathieu Best Studio" }],
  creator: "Mathieu Best Studio",
  publisher: "Mathieu Best Studio",
  metadataBase: new URL("https://mathieubeststudio.fr"),
  alternates: {
    canonical: "https://mathieubeststudio.fr",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://mathieubeststudio.fr",
    siteName: "Mathieu Best Studio",
    title: "Mathieu Best Studio | Développement d'applications mobiles et solutions numériques",
    description:
      "Développement d'applications iOS, Android, logiciels sur mesure et solutions numériques innovantes.",
    images: [
      {
        url: "https://mathieubeststudio.fr/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mathieu Best Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathieu Best Studio | Développement d'applications mobiles",
    description:
      "Développement d'applications iOS, Android, logiciels sur mesure et solutions numériques innovantes.",
    images: ["https://mathieubeststudio.fr/og-image.png"],
  },
  robots: {
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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mathieu Best Studio",
              url: "https://mathieubeststudio.fr",
              email: "contact@mathieubeststudio.fr",
              description:
                "Développement d'applications mobiles, logiciels sur mesure et solutions numériques.",
              founder: {
                "@type": "Person",
                name: "Mathieu Best",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "contact@mathieubeststudio.fr",
                contactType: "customer service",
                availableLanguage: ["French"],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Mathieu Best Studio",
              url: "https://mathieubeststudio.fr",
              description:
                "Développement d'applications iOS, Android, logiciels sur mesure et solutions numériques.",
              areaServed: "FR",
              availableLanguage: "French",
            }),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <ClientLayout>
          <SplashScreen />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
