import type { Metadata } from "next";
import Script from "next/script";
import {
  Cormorant_Garamond,
  Lora,
  Inter,
  Italianno,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { site } from "./site-config";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

const title = "Dra. Jéssica Enes | Harmonização Facial e Endodontia";
const description =
  "Atelier clínico em Belo Horizonte. Harmonização facial e endodontia com técnica autoral, resultado natural e discrição. Atendimento por agendamento.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/assets/dra-jessica.png",
        width: 828,
        height: 1039,
        alt: "Dra. Jéssica Enes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/dra-jessica.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: site.name,
  url: site.url,
  image: `${site.url}/assets/dra-jessica.png`,
  telephone: site.phoneE164,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: "BR",
  },
  openingHours: "Mo-Fr 09:00-19:00",
  medicalSpecialty: ["CosmeticDentistry", "Endodontic"],
  founder: {
    "@type": "Person",
    name: "Jéssica Enes",
    jobTitle: "Especialista em Harmonização Facial e Endodontia",
  },
  sameAs: [site.social.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${cormorant.variable} ${lora.variable} ${inter.variable} ${italianno.variable} ${jetbrains.variable}`}
      >
        {/* Google tag (gtag.js) — Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18269556080"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18269556080');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
