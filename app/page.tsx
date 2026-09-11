import { LandingShell } from "@/components/landing-shell";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dimkomfortu.kyiv.ua";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Comfort Climate",
  url: siteUrl,
  description:
    "Підбір і встановлення вікон та кондиціонерів у Києві та Київській області.",
  areaServed: ["Київ", "Київська область"],
  serviceType: ["Встановлення вікон", "Встановлення кондиціонерів"],
  telephone: process.env.NEXT_PUBLIC_PHONE || "+38 (067) 000-00-00"
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LandingShell />
    </>
  );
}
