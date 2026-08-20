import type { Metadata } from "next";
import AboutHero from "./_components/AboutHero";
import OurApproach from "./_components/OurApproach";
import QualityGrid from "./_components/QualityGrid";
import CoProductionQuote from "./_components/CoProductionQuote";

export const metadata: Metadata = {
  title: "About Us | Direct Link Care",
  description:
    "Learn about Direct Link Care's person-centred approach, quality standards and accreditations across Oxford and the surrounding region.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-zinc-50">
      <AboutHero />
      <OurApproach />
      <QualityGrid />
      <CoProductionQuote />
    </main>
  );
}
