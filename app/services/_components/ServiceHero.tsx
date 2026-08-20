import Image from "next/image";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import type { Service } from "../data";

export default function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:px-6 sm:pt-16 sm:pb-24 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-dark">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] text-white">
              +
            </span>
            Care Services
          </span>

          <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight text-brand-dark uppercase sm:text-5xl">
            {service.title}
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-black/60">
            {service.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-brand py-2 pr-2 pl-6 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Contact Us
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <ArrowIcon />
              </span>
            </Link>

            <a
              href="tel:01865338111"
              className="group flex items-center gap-3 text-sm font-semibold text-brand-dark"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <PhoneIcon />
              </span>
              Call 01865 338111
            </a>
          </div>
        </Reveal>

        <Reveal
          delay={0.15}
          className="relative h-72 overflow-hidden rounded-3xl bg-zinc-100 sm:h-96 lg:h-[420px]"
        >
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 520px, 90vw"
            className="object-cover"
            priority
          />
        </Reveal>
      </div>
    </section>
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

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3.5 2h2l1.2 3.2-1.6 1.3a8.5 8.5 0 0 0 4.4 4.4l1.3-1.6L14 10.5v2a1.5 1.5 0 0 1-1.6 1.5A11 11 0 0 1 2 4.6 1.5 1.5 0 0 1 3.5 2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
