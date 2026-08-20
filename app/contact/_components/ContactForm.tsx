"use client";

import { useState } from "react";
import Reveal from "@/app/components/Reveal";

const inputClasses =
  "w-full rounded-xl border border-black/10 bg-white py-3 pr-4 pl-11 text-sm text-black placeholder:text-black/35 outline-none transition-colors focus:border-brand";

const ENQUIRY_TYPES = [
  "Family member or individual seeking care",
  "Local authority or referral partner",
  "Healthcare professional",
  "General enquiry",
];

const SERVICES = [
  "Domiciliary Care",
  "Person Centred Care",
  "Supported Living",
  "Specialist Support",
  "Mother & Baby Support",
  "Semi Independent Living",
  "Not sure / general enquiry",
];

const MESSAGE_LIMIT = 500;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  if (submitted) {
    return (
      <Reveal delay={0.1} className="rounded-3xl bg-white p-8 sm:p-10">
        <p className="font-heading text-lg font-bold text-black">
          This form isn&apos;t connected to email yet
        </p>
        <p className="mt-2 text-sm leading-relaxed text-black/60">
          For now, please call{" "}
          <a href="tel:01865338111" className="font-semibold text-brand">
            0186 533 8111
          </a>{" "}
          or email{" "}
          <a href="mailto:info@directlinkcare.com" className="font-semibold text-brand">
            info@directlinkcare.com
          </a>{" "}
          and our team will get back to you directly.
        </p>
      </Reveal>
    );
  }

  return (
    <Reveal delay={0.1} className="rounded-3xl bg-white p-8 sm:p-10">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
        className="flex flex-col gap-6"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full Name" htmlFor="fullName" icon={<UserIcon />}>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Enter your full name..."
              className={inputClasses}
            />
          </Field>

          <Field label="Email Address" htmlFor="email" icon={<MailIcon />}>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email address..."
              className={inputClasses}
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Phone Number" htmlFor="phone" icon={<PhoneIcon />}>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number..."
              className={inputClasses}
            />
          </Field>

          <Field label="I'm Getting In Touch As" htmlFor="enquiryType" icon={<ListIcon />}>
            <select
              id="enquiryType"
              name="enquiryType"
              defaultValue=""
              required
              className={`${inputClasses} appearance-none`}
            >
              <option value="" disabled>
                Select an option...
              </option>
              {ENQUIRY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div>
          <p className="text-sm font-semibold text-black/70">Which service is this about?</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {SERVICES.map((service) => (
              <ServiceChip key={service} label={service} />
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-semibold text-black/70">
            Message
          </label>
          <div className="relative mt-2">
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              maxLength={MESSAGE_LIMIT}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Enter your message here..."
              className="w-full resize-none rounded-xl border border-black/10 bg-white p-4 text-sm text-black placeholder:text-black/35 outline-none transition-colors focus:border-brand"
            />
            <span className="absolute right-4 bottom-3 text-xs text-black/35">
              {message.length}/{MESSAGE_LIMIT}
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand py-3 pr-3 pl-8 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Send Message
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
            <ArrowIcon />
          </span>
        </button>
      </form>
    </Reveal>
  );
}

function Field({
  label,
  htmlFor,
  icon,
  children,
}: {
  label: string;
  htmlFor: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm font-semibold text-black/70">
        {label}
      </label>
      <div className="relative mt-2">
        <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-black/35">
          {icon}
        </span>
        {children}
      </div>
    </div>
  );
}

function ServiceChip({ label }: { label: string }) {
  return (
    <label className="group cursor-pointer">
      <input type="checkbox" name="services" value={label} className="sr-only" />
      <span className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/70 transition-colors group-has-[:checked]:border-brand group-has-[:checked]:bg-brand/5 group-has-[:checked]:text-brand-dark">
        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-black/20 text-white transition-colors group-has-[:checked]:border-brand group-has-[:checked]:bg-brand">
          <CheckIcon />
        </span>
        {label}
      </span>
    </label>
  );
}

function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2.5 13.5c0-2.5 2.4-4.3 5.5-4.3s5.5 1.8 5.5 4.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="3.5" width="13" height="9" rx="1.8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 4.5 8 9l6-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
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

function ListIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="2.5" width="12" height="11" rx="1.8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4.8 5.8h6.4M4.8 8h6.4M4.8 10.2h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 16 16" fill="none">
      <path d="M3 8.5 6.2 11.5 13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
