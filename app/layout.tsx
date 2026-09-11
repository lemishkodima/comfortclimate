import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope"
});

const googleAdsId = "AW-18316274982";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dimkomfortu.kyiv.ua";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Comfort Climate | Вікна та кондиціонери у Києві",
    template: "%s | Comfort Climate"
  },
  description:
    "Встановлення вікон і кондиціонерів у Києві та Київській області. Підбір, точний монтаж і розрахунок вартості під ваш простір.",
  applicationName: "Comfort Climate",
  keywords: [
    "вікна Київ",
    "встановлення вікон Київ",
    "кондиціонери Київ",
    "монтаж кондиціонерів",
    "Comfort Climate"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "/",
    siteName: "Comfort Climate",
    title: "Comfort Climate | Вікна та кондиціонери у Києві",
    description:
      "Підбір і встановлення вікон та кондиціонерів у Києві. Точний монтаж, чиста геометрія та комфортний мікроклімат.",
    images: [
      {
        url: "/window-hero.png",
        width: 1200,
        height: 1200,
        alt: "Вікно Comfort Climate"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Comfort Climate | Вікна та кондиціонери у Києві",
    description:
      "Підбір і встановлення вікон та кондиціонерів у Києві.",
    images: ["/window-hero.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${manrope.variable} bg-background font-sans text-foreground antialiased`}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAdsId}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
