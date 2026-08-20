import GlowCard from "@/app/components/GlowCard";
import Reveal from "@/app/components/Reveal";

const VALUES = [
  "Privacy and dignity in a safe, homely setting",
  "Maximising independence, one goal at a time",
  "Encouraging personal responsibility",
  "Respecting the individual within a team",
];

export default function OurApproach() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-semibold text-black">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Our Approach
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-black uppercase sm:text-4xl">
            Person-centred,
            <br />
            <span className="text-brand">not task-centred</span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-black/60 sm:text-base">
            Every person we support has their own goals, history and pace.
            Our plans are built around them — not the other way round —
            so support fits the life someone wants to lead, not a fixed
            routine.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col gap-4">
          {VALUES.map((value, index) => (
            <GlowCard
              key={value}
              delay={index * 0.08}
              y={12}
              className="flex items-start gap-4 p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                <CheckIcon />
              </span>
              <p className="pt-1 text-sm leading-relaxed font-medium text-black/75 sm:text-base">
                {value}
              </p>
            </GlowCard>
          ))}
        </Reveal>
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
