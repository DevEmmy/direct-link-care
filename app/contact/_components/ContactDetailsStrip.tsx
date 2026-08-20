import Reveal from "@/app/components/Reveal";

const ADDRESS = "John Eccles House, Oxford Science Park, Robert Robinson Avenue, Oxford, OX4 4GP";
const DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

export default function ContactDetailsStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
      <Reveal className="grid gap-8 rounded-3xl bg-ink p-8 text-white sm:grid-cols-3 sm:p-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-brand">
              <PinIcon />
            </span>
            <p className="text-sm font-semibold text-white/50">Visit Us</p>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-white/85">{ADDRESS}</p>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm font-semibold text-brand hover:underline"
          >
            Get directions
          </a>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-brand">
              <PhoneIcon />
            </span>
            <p className="text-sm font-semibold text-white/50">Call Us</p>
          </div>
          <div className="mt-4 flex flex-col gap-1">
            <a href="tel:01865338111" className="text-sm text-white/85 transition-colors hover:text-brand">
              0186 533 8111
            </a>
            <a href="tel:01865338112" className="text-sm text-white/85 transition-colors hover:text-brand">
              0186 533 8112
            </a>
            <a href="tel:07717602085" className="text-sm text-white/85 transition-colors hover:text-brand">
              07717 602 085
            </a>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-brand">
              <MailIcon />
            </span>
            <p className="text-sm font-semibold text-white/50">Email &amp; Socials</p>
          </div>
          <a
            href="mailto:info@directlinkcare.com"
            className="mt-4 block text-sm text-white/85 transition-colors hover:text-brand"
          >
            info@directlinkcare.com
          </a>
          <a
            href="http://linkedin.com/in/direct-link-care-ltd-the-holistic-care-providers-00640a1a5"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-sm text-white/85 transition-colors hover:text-brand"
          >
            LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 16.5S3.5 11.7 3.5 7.5a5.5 5.5 0 0 1 11 0c0 4.2-5.5 9-5.5 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="7.5" r="2" stroke="currentColor" strokeWidth="1.5" />
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

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 5 9 10l6.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
