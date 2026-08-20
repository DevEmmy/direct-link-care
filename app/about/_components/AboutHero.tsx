import Image from "next/image";
import Reveal from "@/app/components/Reveal";

const FACTS = [
  { label: "CQC Registered" },
  { label: "6 Service Lines" },
  { label: "Oxford & Surrounding Areas" },
];

export default function AboutHero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:px-6 sm:pt-16 sm:pb-24 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-dark">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] text-white">
              +
            </span>
            About Direct Link Care
          </span>

          <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight text-brand-dark uppercase sm:text-5xl lg:text-[3.25rem]">
            Care that puts
            <br />
            the <span className="text-brand">person first</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-black/60">
            We aim to meet and exceed the expectations of the people we
            support. Every plan is built to help someone achieve their goals
            — whatever challenges they face — within a safe, therapeutic and
            homely environment.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {FACTS.map((fact) => (
              <span
                key={fact.label}
                className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-brand-dark"
              >
                {fact.label}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative h-72 overflow-hidden rounded-3xl bg-zinc-100 sm:h-96 lg:h-[420px]">
          <Image
            src="/hero/person-centred-care.webp"
            alt="A Direct Link Care support worker listening to a client"
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
