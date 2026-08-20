import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:px-6 sm:pt-16 sm:pb-24 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
        {/* Copy */}
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-dark">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] text-white">
              +
            </span>
            CQC Registered Care Provider
          </span>

          <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight text-brand-dark uppercase sm:text-5xl lg:text-[3.25rem]">
            Holistic care
            <br />
            for real <span className="text-brand">independence</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-black/60">
            Direct Link Care provides person-centred care and support for
            children, young people and adults. We work with families, local
            authorities and healthcare professionals to deliver domiciliary
            care, complex clinical care, supported living and specialist
            support tailored to each person&apos;s needs.
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

        {/* Image collage */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <Reveal delay={0.1} className="relative h-44 overflow-hidden rounded-3xl bg-zinc-100 sm:h-52 lg:h-56">
              <Image
                src="/hero/tablet-support.webp"
                alt="A carer supporting a client with a tablet at home"
                fill
                sizes="(min-width: 1024px) 260px, 45vw"
                className="object-cover"
                priority
              />
            </Reveal>
            <Reveal delay={0.3} className="relative h-36 overflow-hidden rounded-3xl bg-zinc-100 sm:h-44 lg:h-48">
              <Image
                src="/hero/family-hug.webp"
                alt="A supported family member embracing a relative"
                fill
                sizes="(min-width: 1024px) 260px, 45vw"
                className="object-cover"
              />
            </Reveal>
          </div>

          <div className="flex flex-col gap-4">
            <Reveal delay={0.2} className="relative h-52 overflow-hidden rounded-3xl bg-zinc-100 sm:h-60 lg:h-64">
              <Image
                src="/hero/companion-care.webp"
                alt="A support worker caring for a client at home"
                fill
                sizes="(min-width: 1024px) 260px, 45vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal
              delay={0.4}
              className="flex h-32 flex-col justify-between rounded-3xl bg-brand p-5 text-white sm:h-36 lg:h-40"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center self-end rounded-full bg-white/15">
                <ArrowIcon />
              </span>
              <p className="text-lg leading-tight font-bold uppercase">
                We provide
                <br />
                holistic care
              </p>
            </Reveal>
          </div>
        </div>
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
