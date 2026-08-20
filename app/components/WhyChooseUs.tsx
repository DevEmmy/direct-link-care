import Image from "next/image";
import GlowCard from "./GlowCard";
import Reveal from "./Reveal";

const VALUES = [
  {
    title: "Dignity",
    description:
      "We support privacy, dignity and individuality in a safe, homely setting — never just the task at hand.",
    icon: HeartIcon,
  },
  {
    title: "Independence",
    description:
      "Person-centred plans build the skills and confidence people need to maximise their own independence.",
    icon: PeopleIcon,
  },
  {
    title: "Safety",
    description:
      "Quarterly quality audits, MAPA-trained staff and the STOMP pledge keep every placement safe and accountable.",
    icon: ShieldIcon,
  },
  {
    title: "Flexibility",
    description:
      "Support flexes around changing needs — from a few hours a week to round-the-clock live-in care.",
    icon: RefreshIcon,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
      <Reveal className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-semibold text-black">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Why Choose Us
        </span>

        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-black uppercase sm:text-4xl">
          That&apos;s why people
          <br />
          <span className="text-brand">choose us</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {VALUES.map(({ title, description, icon: Icon }, index) => (
            <GlowCard key={title} delay={index * 0.1} y={16}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Icon />
              </span>
              <p className="mt-4 font-heading text-base font-bold text-black">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-black/55">{description}</p>
            </GlowCard>
          ))}
        </div>

        <Reveal delay={0.2} className="relative min-h-80 overflow-hidden rounded-3xl bg-zinc-100 lg:min-h-0">
          <Image
            src="/hero/mobility-support.webp"
            alt="A support worker helping a client walk with a mobility frame"
            fill
            sizes="(min-width: 1024px) 520px, 90vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 15.5S2 11.6 2 6.9C2 4.5 3.9 3 5.9 3c1.3 0 2.5.7 3.1 1.8C9.6 3.7 10.8 3 12.1 3 14.1 3 16 4.5 16 6.9c0 4.7-7 8.6-7 8.6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="6.5" cy="5.5" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12.5" cy="7" r="1.75" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M2 15c0-2.3 2-4 4.5-4S11 12.7 11 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11.5 11.3c1.9.2 3.5 1.7 3.5 3.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 2.5 15 4.5v4.2c0 4-2.5 6.7-6 7.8-3.5-1.1-6-3.8-6-7.8V4.5L9 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 9.2 8.3 11l3.2-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M3 9a6 6 0 0 1 10.2-4.3M15 9a6 6 0 0 1-10.2 4.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.2 2.8v2.6h-2.6M4.8 15.2v-2.6h2.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
