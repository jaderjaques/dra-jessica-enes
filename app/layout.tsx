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
import { site, ga4Id } from "./site-config";

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

const title = "Harmonização Facial em BH | Dra. Jéssica Enes";
const description =
  "Harmonização facial em BH com resultado natural. Clínica entre o Lourdes e o Santo Agostinho, Centro-Sul. Avaliação por agendamento.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  keywords: [
    "harmonização facial BH",
    "harmonização facial Lourdes",
    "harmonização facial Belo Horizonte",
    "harmonização facial Santo Agostinho",
    "preenchimento labial BH",
    "toxina botulínica BH",
    "rinomodelação Belo Horizonte",
    "endodontia Belo Horizonte",
    "Dra. Jéssica Enes",
  ],
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
  "@id": `${site.url}/#clinica`,
  name: site.name,
  description,
  url: site.url,
  image: `${site.url}/assets/dra-jessica.png`,
  telephone: site.phoneE164,
  priceRange: "$$$",
  currenciesAccepted: "BRL",
  address: {
    "@type": "PostalAddress",
    // O bairro entra no streetAddress: o Google casa NAP por string, e é
    // assim que o endereço aparece no perfil do Google e no rodapé do site.
    streetAddress: `${site.address.street}, ${site.address.complement}`,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: "BR",
  },
  hasMap: site.address.mapsUrl,
  // Bairros atendidos. Sinal hiperlocal do Centro-Sul de BH.
  areaServed: [
    "Lourdes, Belo Horizonte",
    "Santo Agostinho, Belo Horizonte",
    "Savassi, Belo Horizonte",
    "Funcionários, Belo Horizonte",
    "Belvedere, Belo Horizonte",
    "Belo Horizonte, MG",
  ].map((name) => ({ "@type": "Place", name })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  medicalSpecialty: ["CosmeticDentistry", "Endodontic"],
  availableService: [
    "Harmonização facial",
    "Preenchimento labial",
    "Toxina botulínica",
    "Rinomodelação",
    "Bioestimuladores de colágeno",
    "Fios de sustentação (PDO)",
    "Endodontia microscópica",
  ].map((name) => ({ "@type": "MedicalProcedure", name })),
  founder: {
    "@type": "Person",
    name: "Jéssica Enes",
    jobTitle: "Especialista em Harmonização Facial e Endodontia",
    identifier: site.cro,
  },
  sameAs: [site.social.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${lora.variable} ${inter.variable} ${italianno.variable} ${jetbrains.variable}`}
    >
      <body>
        {/* Google tag (gtag.js) — Google Ads + GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18269556080"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18269556080');${ga4Id ? `\ngtag('config', '${ga4Id}');` : ""}`}
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
