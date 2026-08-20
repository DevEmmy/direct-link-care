import Reveal from "@/app/components/Reveal";
import type { ServiceTier } from "../data";

export default function ServiceTiers({
  title,
  tiers,
}: {
  title?: string;
  tiers: ServiceTier[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
      <Reveal>
        <h2 className="text-2xl font-extrabold tracking-tight text-black uppercase sm:text-3xl">
          {title ?? "How it works"}
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier, index) => (
          <Reveal
            key={tier.title}
            delay={(index % 3) * 0.1}
            y={16}
            className="rounded-2xl bg-brand-dark/5 p-6"
          >
            <p className="font-heading text-base font-bold text-black">{tier.title}</p>
            {tier.description && (
              <p className="mt-2 text-sm leading-relaxed text-black/55">{tier.description}</p>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
