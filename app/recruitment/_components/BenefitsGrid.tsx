import Reveal from "@/app/components/Reveal";

const BENEFITS = [
  {
    title: "Flexible Shifts",
    description: "Choose shift patterns that fit around your life, not the other way round.",
    icon: ClockIcon,
  },
  {
    title: "Weekly Pay",
    description: "Get paid every Friday, without waiting on a monthly cycle.",
    icon: WalletIcon,
  },
  {
    title: "Competitive Rates",
    description: "Top competitive pay rates across NHS and private healthcare placements.",
    icon: BadgeIcon,
  },
  {
    title: "Dedicated Support",
    description: "A dedicated support specialist behind every placement, start to finish.",
    icon: HeadsetIcon,
  },
];

export default function BenefitsGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
      <Reveal className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-semibold text-black">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Why Register With Us
        </span>

        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-black uppercase sm:text-4xl">
          Built around
          <br />
          <span className="text-brand">working nurses</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map(({ title, description, icon: Icon }, index) => (
          <Reveal key={title} delay={(index % 4) * 0.08} y={16} className="rounded-2xl bg-brand/5 p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand">
              <Icon />
            </span>
            <p className="mt-4 font-heading text-base font-bold text-black">{title}</p>
            <p className="mt-2 text-sm leading-relaxed text-black/55">{description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 5.5V9l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="4.5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 7.5h14" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12.5" cy="11" r="1" fill="currentColor" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 10.3 5.5 16l3.5-2 3.5 2-1-5.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 10v-1a6 6 0 0 1 12 0v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="2" y="10" width="3.2" height="4.5" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="12.8" y="10" width="3.2" height="4.5" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 14.5v.5a2.5 2.5 0 0 1-2.5 2.5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
