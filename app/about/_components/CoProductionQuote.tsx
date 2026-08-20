import Reveal from "@/app/components/Reveal";

export default function CoProductionQuote() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
      <Reveal className="rounded-[2rem] bg-ink px-6 py-14 text-center sm:px-12 sm:py-20">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Co-Production
        </span>

        <p className="mx-auto mt-6 max-w-2xl font-heading text-2xl leading-snug font-bold text-white sm:text-3xl">
          &ldquo;Person-centred means built with you — not just for
          you.&rdquo;
        </p>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/50 sm:text-base">
          The people we support help shape the plans, policies and services
          we deliver — through trained quality checkers and regular
          co-production reviews.
        </p>
      </Reveal>
    </section>
  );
}
