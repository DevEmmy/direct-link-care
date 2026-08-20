import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <Reveal className="overflow-hidden rounded-[2rem] bg-brand shadow-2xl shadow-black/10">
        <div className="grid lg:grid-cols-[1fr_380px]">
          <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-12">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Call To Action
            </span>

            <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-white uppercase sm:text-4xl">
              Do you need help?
            </h2>

            <p className="max-w-sm text-sm leading-relaxed text-white/80 sm:text-base">
              Get in touch today for a no-obligation conversation about care
              for you or someone you love.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white py-2 pr-2 pl-6 text-sm font-semibold text-brand-dark transition-colors hover:bg-white/90"
              >
                Contact Us
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-dark/10">
                  <ArrowIcon />
                </span>
              </Link>

              <a
                href="tel:01865338111"
                className="inline-flex items-center gap-3 rounded-full border border-white/40 py-2 pr-2 pl-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Call Us
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                  <ArrowIcon />
                </span>
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <Image
              src="/hero/tablet-support.webp"
              alt="A Direct Link Care support worker with a client"
              fill
              sizes="380px"
              className="object-cover"
            />
          </div>
        </div>
      </Reveal>
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
