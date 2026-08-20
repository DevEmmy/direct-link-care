import Link from "next/link";
import Reveal from "./Reveal";

const SERVICE_LINKS = [
  { label: "Complex Care & TDDI", href: "/services/complex-care-tddi" },
  { label: "Children & Young People's Care", href: "/services/children-young-people" },
  { label: "Domiciliary Care", href: "/services/domiciliary-care" },
  { label: "Person Centred Care", href: "/services/person-centred-care" },
  { label: "Supported Living", href: "/services/supported-living" },
  { label: "Specialist Support", href: "/services/specialist-support" },
  { label: "Mother & Baby Support", href: "/services/mother-baby-support" },
  { label: "Semi Independent Living", href: "/services/semi-independent-living" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Recruitment", href: "/recruitment" },
  { label: "Carbon Reduction Plan", href: "/carbon-reduction-plan" },
  { label: "Complaints Policy", href: "/complaints-policy" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const REACH_US_LINKS = [
  { label: "LinkedIn", href: "http://linkedin.com/in/direct-link-care-ltd-the-holistic-care-providers-00640a1a5", external: true },
  { label: "Email Us", href: "mailto:info@directlinkcare.com" },
  { label: "Call Us", href: "tel:01865338111" },
];

export default function Footer() {
  return (
    <footer className="bg-ink pt-16 pb-10 sm:pt-20">
      <Reveal className="mx-auto max-w-6xl px-4 sm:px-6" y={16}>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.3fr]">
          <div>
            <Link href="/" className="font-heading text-xl font-bold text-white">
              Direct<span className="text-brand">Link</span>Care
            </Link>
            <p className="mt-2 text-sm text-white/40">The Holistic Care Providers</p>

            <ul className="mt-8 flex flex-col gap-1">
              {REACH_US_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between gap-3 border-t border-white/10 py-3 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ChevronIcon />
                  </a>
                </li>
              ))}
              <li className="border-t border-white/10" aria-hidden />
            </ul>
          </div>

          <FooterColumn title="Services" links={SERVICE_LINKS} />
          <FooterColumn title="About Us" links={COMPANY_LINKS} />

          <div>
            <h3 className="font-heading text-base font-bold text-white">Contact</h3>
            <address className="mt-5 flex flex-col gap-4 text-sm text-white/70 not-italic">
              <span>
                John Eccles House, Oxford Science Park,
                <br />
                Robert Robinson Avenue, Oxford, OX4 4GP
              </span>
              <a href="tel:01865338111" className="transition-colors hover:text-white">
                01865 338111 / 01865 338112
              </a>
              <a
                href="mailto:info@directlinkcare.com"
                className="transition-colors hover:text-white"
              >
                info@directlinkcare.com
              </a>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Direct Link Care Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/40">Company registration 08517413</p>
        </div>
      </Reveal>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-heading text-base font-bold text-white">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      className="shrink-0 text-white/40 transition-colors group-hover:text-white"
    >
      <path
        d="M1 1l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
