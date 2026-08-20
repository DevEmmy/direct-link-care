import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, SERVICES } from "../data";
import ServiceHero from "../_components/ServiceHero";
import ServiceIntro from "../_components/ServiceIntro";
import ServiceFeatures from "../_components/ServiceFeatures";
import ServiceTiers from "../_components/ServiceTiers";
import ServiceProcess from "../_components/ServiceProcess";
import OtherServices from "../_components/OtherServices";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: `${service.title} | Direct Link Care`,
    description: service.tagline,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <main className="flex-1 bg-zinc-50">
      <ServiceHero service={service} />
      <ServiceIntro intro={service.intro} />
      {service.features && (
        <ServiceFeatures title={service.featuresTitle} features={service.features} />
      )}
      {service.process && <ServiceProcess steps={service.process} />}
      {service.tiers && <ServiceTiers title={service.tiersTitle} tiers={service.tiers} />}
      <OtherServices currentSlug={service.slug} />
    </main>
  );
}
