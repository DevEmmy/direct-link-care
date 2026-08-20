import Reveal from "@/app/components/Reveal";

const ITEMS = [
  {
    title: "CQC Registered Provider",
    description: "Regulated and inspected care across all six of our service lines.",
    icon: ShieldIcon,
  },
  {
    title: "Quarterly Quality Audits",
    description: "Internal reviews keep every placement accountable, every three months.",
    icon: ClipboardIcon,
  },
  {
    title: "Trained Quality Checkers",
    description: "Service users are trained to check standards from the inside.",
    icon: SearchIcon,
  },
  {
    title: "MAPA Accredited Training",
    description: "Staff are trained in positive, non-restrictive behaviour support.",
    icon: HandIcon,
  },
  {
    title: "STOMP Pledge",
    description: "Committed to stopping the over-medication of people with a learning disability.",
    icon: PillIcon,
  },
  {
    title: "Co-Production",
    description: "People who use our services help shape how we run them.",
    icon: PeopleIcon,
  },
];

export default function QualityGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
      <Reveal className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-semibold text-black">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Quality &amp; Safeguarding
        </span>

        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-black uppercase sm:text-4xl">
          Standards we hold
          <br />
          <span className="text-brand">ourselves to</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map(({ title, description, icon: Icon }, index) => (
          <Reveal
            key={title}
            delay={(index % 3) * 0.1}
            y={16}
            className="rounded-2xl bg-brand/5 p-6"
          >
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

function ClipboardIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="4" y="3.5" width="10" height="12.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.8 3.5V2.8a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v.7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 8.5h5M6.5 11.5h5M6.5 14h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="8" cy="8" r="5.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 16 12.2 12.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HandIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M4 8.5V4a1 1 0 0 1 2 0v4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 8V3a1 1 0 0 1 2 0v5M8 8V4a1 1 0 0 1 2 0v5M10 9V5.5a1 1 0 0 1 2 0v5.5c0 2.8-1.8 5-5 5-2.2 0-3.2-.9-4.3-2.5L1.5 11a1.1 1.1 0 0 1 1.7-1.4L4 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PillIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect
        x="2.5"
        y="7.2"
        width="13"
        height="6.6"
        rx="3.3"
        transform="rotate(-35 9 9)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M2.5 15.5 15.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
