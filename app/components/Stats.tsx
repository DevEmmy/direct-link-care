import CountUp from "./CountUp";
import Reveal from "./Reveal";

const STATS = [
  { value: "6", label: "Care Service Lines" },
  { value: "5+", label: "Local Authority Partners" },
  { value: "16+", label: "Ages We Support From" },
  { value: "CQC", label: "Registered Provider" },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <Reveal className="rounded-[2rem] bg-brand-dark px-6 py-10 sm:px-12 sm:py-12">
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-white/10">
          {STATS.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={0.1 + index * 0.1}
              y={12}
              className="px-2 text-center sm:px-6"
            >
              <p className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
                <CountUp value={stat.value} />
              </p>
              <p className="mt-1 text-xs text-white/60 sm:text-sm">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/40 sm:text-sm">
          Delivered in partnership with Oxfordshire social services, community mental
          health teams and local authorities.
        </p>
      </Reveal>
    </section>
  );
}
