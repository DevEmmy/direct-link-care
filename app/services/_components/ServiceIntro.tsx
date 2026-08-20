import Reveal from "@/app/components/Reveal";

export default function ServiceIntro({ intro }: { intro: string }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
      <Reveal className="max-w-3xl border-t border-black/10 pt-10 sm:pt-12">
        <p className="text-lg leading-relaxed text-black/70 sm:text-xl">{intro}</p>
      </Reveal>
    </section>
  );
}
