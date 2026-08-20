"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    title: "Domiciliary Care",
    description: "Personal care and visits for people living independently in their own home.",
    href: "/services/domiciliary-care",
    image: "/hero/domiciliary-care.webp",
  },
  {
    title: "Person Centred Care",
    description: "Individualised plans built around each person's goals, priorities and preferences.",
    href: "/services/person-centred-care",
    image: "/hero/person-centred-care.webp",
  },
  {
    title: "Supported Living",
    description: "Independent housing with the right level of everyday support, from low to high needs.",
    href: "/services/supported-living",
    image: "/hero/supported-living.webp",
  },
  {
    title: "Specialist Support",
    description: "Tailored support for autism, epilepsy, learning disabilities and mental health needs.",
    href: "/services/specialist-support",
    image: "/hero/specialist-support.webp",
  },
  {
    title: "Mother & Baby Support",
    description: "A supported, fully-equipped unit for young parents building an independent family life.",
    href: "/services/mother-baby-support",
    image: "/hero/family-hug.webp",
  },
  {
    title: "Semi Independent Living",
    description: "Structured support helping care leavers and young people move toward independence.",
    href: "/services/semi-independent-living",
    image: "/hero/companion-care.webp",
  },
];

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 280) + 24;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <section className="pb-20 sm:pb-28">
      <Reveal className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-semibold text-black">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Services
        </span>

        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-black uppercase sm:text-4xl">
          Our <span className="text-brand">services</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-black/55 sm:text-base">
          Six person-centred care services, delivered in partnership with local
          authorities and health teams across Oxford and the surrounding region.
        </p>
      </Reveal>

      <div
        ref={trackRef}
        className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-2 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="shrink-0 sm:hidden" aria-hidden />
        {SERVICES.map((service, index) => (
          <Reveal
            key={service.href}
            data-card
            delay={(index % 3) * 0.1}
            y={20}
            className="h-[420px] w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]"
          >
            <Link
              href={service.href}
              className="group relative block h-full w-full overflow-hidden rounded-3xl bg-zinc-200"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 360px, 80vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              <span
                aria-hidden
                className="absolute top-4 left-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur"
              >
                <HeartIcon />
              </span>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <div>
                  <p className="font-heading text-lg font-bold text-white">{service.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">
                    {service.description}
                  </p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-brand-dark transition-transform group-hover:-rotate-45">
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous service"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition-colors hover:bg-black/5"
        >
          <ChevronIcon direction="left" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next service"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </section>
  );
}

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
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

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M2.5 11.5L11.5 2.5M11.5 2.5H4.5M11.5 2.5V9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      className={direction === "right" ? "rotate-180" : undefined}
    >
      <path
        d="M7 1 1 7l6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
