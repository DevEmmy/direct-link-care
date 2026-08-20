import GlowCard from "@/app/components/GlowCard";
import Reveal from "@/app/components/Reveal";

export default function ServiceFeatures({
  title,
  features,
}: {
  title?: string;
  features: string[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
      <Reveal>
        <h2 className="text-2xl font-extrabold tracking-tight text-black uppercase sm:text-3xl">
          {title ?? "What we help with"}
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {features.map((feature, index) => (
          <GlowCard
            key={feature}
            delay={(index % 4) * 0.06}
            y={12}
            className="flex items-start gap-4 p-5"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
              <CheckIcon />
            </span>
            <p className="pt-1 text-sm leading-relaxed font-medium text-black/75 sm:text-base">
              {feature}
            </p>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8.5 6.2 11.5 13 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
