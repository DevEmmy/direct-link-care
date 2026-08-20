import Link from "next/link";
import Reveal from "@/app/components/Reveal";

const REGISTER_URL = "https://directlinkcare.com/20xapp.com/staff/register";

export default function RegisterCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <Reveal className="flex flex-col items-center gap-6 rounded-[2rem] bg-ink px-6 py-14 text-center sm:px-12 sm:py-16">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Ready to join?
        </span>

        <h2 className="max-w-xl font-heading text-2xl leading-tight font-bold text-white sm:text-3xl">
          Register today and start your next placement on your terms.
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-brand py-2 pr-2 pl-6 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Register as Staff
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
              <ArrowIcon />
            </span>
          </Link>

          <a
            href="mailto:info@directlinkcare.com"
            className="inline-flex items-center gap-3 rounded-full border border-white/40 py-2 pr-2 pl-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Email Us
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
              <ArrowIcon />
            </span>
          </a>
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
