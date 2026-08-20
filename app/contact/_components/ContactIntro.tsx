import Reveal from "@/app/components/Reveal";

export default function ContactIntro() {
  return (
    <Reveal>
      <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-dark">
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] text-white">
          +
        </span>
        Contact Us
      </span>

      <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight text-black sm:text-5xl">
        Let&apos;s Get In
        <br />
        Touch.
      </h1>

      <p className="mt-5 max-w-sm text-base leading-relaxed text-black/60">
        Get in touch today for any further information you may require, or
        for any referrals — our team is here to help.
      </p>

      <p className="mt-6 text-sm text-black/50">
        Or just reach out manually to{" "}
        <a href="mailto:info@directlinkcare.com" className="font-semibold text-brand hover:underline">
          info@directlinkcare.com
        </a>
        .
      </p>
    </Reveal>
  );
}
