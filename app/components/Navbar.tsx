"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CARE_SERVICES = [
  {
    label: "Domiciliary Care",
    href: "/services/domiciliary-care",
    description: "In-home visits and live-in support",
  },
  {
    label: "Person Centred Care",
    href: "/services/person-centred-care",
    description: "Individualised planning around your goals",
  },
  {
    label: "Supported Living",
    href: "/services/supported-living",
    description: "Independence with the right level of support",
  },
  {
    label: "Specialist Support Services",
    href: "/services/specialist-support",
    description: "Mental health, autism, epilepsy & more",
  },
  {
    label: "Mother & Baby Support",
    href: "/services/mother-baby-support",
    description: "Supported accommodation for young families",
  },
  {
    label: "Semi Independent Living",
    href: "/services/semi-independent-living",
    description: "For young people and care leavers 16+",
  },
];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full bg-white px-4 sm:px-6"
    >
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between gap-2 py-3">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center" onClick={() => setMobileOpen(false)}>
          <Image
            src="/logo.png"
            alt="Direct Link Care"
            width={300}
            height={102}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 text-sm font-medium text-black md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-4 py-2 transition-colors hover:bg-black/5"
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 rounded-full px-4 py-2 transition-colors hover:bg-black/5"
            >
              Care Services
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className="mt-0.5 transition-transform group-hover:rotate-180"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="invisible absolute top-full left-1/2 z-50 w-[560px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="grid grid-cols-2 gap-1 bg-white p-3">
                {CARE_SERVICES.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="px-3 py-2.5 transition-colors hover:bg-brand/5"
                  >
                    <p className="text-sm font-semibold text-black">{service.label}</p>
                    <p className="mt-0.5 text-xs text-black/50">{service.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li>
            <Link
              href="/recruitment"
              className="rounded-full px-4 py-2 transition-colors hover:bg-black/5"
            >
              Recruitment
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="rounded-full px-4 py-2 transition-colors hover:bg-black/5"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Right side actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/recruitment"
            className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-black/5"
          >
            Apply Now
            <ArrowIcon />
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
          >
            Get In Touch
            <ArrowIcon />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-black hover:bg-black/5 md:hidden"
        >
          {mobileOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M0 1H18M0 7H18M0 13H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="mx-auto max-w-6xl bg-white p-4 md:hidden">
          <ul className="flex flex-col gap-1 text-sm font-medium text-black">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-3 py-2.5 hover:bg-black/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 hover:bg-black/5"
              >
                Care Services
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <ul className="mt-1 flex flex-col gap-0.5 pl-3">
                  {CARE_SERVICES.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-xl px-3 py-2 text-black/70 hover:bg-black/5"
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/recruitment"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-3 py-2.5 hover:bg-black/5"
              >
                Recruitment
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-3 py-2.5 hover:bg-black/5"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="mt-3 flex flex-col gap-2 border-t border-black/5 pt-3">
            <Link
              href="/recruitment"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full border border-black/10 px-4 py-2.5 text-sm font-medium text-black hover:bg-black/5"
            >
              Apply Now
              <ArrowIcon />
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-dark"
            >
              Get In Touch
              <ArrowIcon />
            </Link>
          </div>
        </div>
      )}
    </motion.header>
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
