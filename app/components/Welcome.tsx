import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function Welcome() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative order-2 h-72 overflow-hidden rounded-3xl bg-zinc-100 sm:h-96 lg:order-1 lg:h-115">
          <Image
            src="/hero/supported-living.webp"
            alt="A Direct Link Care client living independently"
            fill
            sizes="(min-width: 1024px) 520px, 90vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.15} className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-semibold text-black">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Welcome
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-black uppercase sm:text-4xl">
            Welcome to <span className="text-brand">Direct Link Care</span>
          </h2>

          <p className="mt-3 text-base font-semibold text-brand-dark sm:text-lg">
            The Holistic Care Providers for Oxford and Surrounding Areas
          </p>

          <div className="mt-8 flex flex-col gap-5 text-sm leading-relaxed text-black/60 sm:text-base">
            <p>
              We are Direct Link Care — we work in partnership with Social
              Services, Community Mental Health Teams (CMHT) and Supporting
              People within leading local authorities across Oxford and the
              surrounding areas, offering high-quality supported housing for
              adults and young persons (16+) at risk. We provide a range of
              specialist residential and supported living services for young
              persons (16+) and adults aged 18 and over with autism, epilepsy,
              Asperger&apos;s syndrome, challenging behaviour, or a mental
              health condition.
            </p>
            <p>
              Our aim is to enable the people we support to achieve their
              goals, believing passionately that regardless of the challenges
              they face, everyone can accomplish extraordinary achievements
              with the right care in the right environment. Our mission is to
              meet and exceed rising customer expectations across our service
              — we believe Direct Link Care should lead the way in setting
              standards of care and satisfaction.
            </p>
          </div>

          <Link
            href="https://directlinkcare.com/wp-content/uploads/2021/01/DLC-BROCHURE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-brand py-2 pr-2 pl-6 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Download Our Brochure
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
              <ArrowIcon />
            </span>
          </Link>
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
