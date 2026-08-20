import Reveal from "@/app/components/Reveal";

export default function ServiceProcess({
  steps,
}: {
  steps: { step: string; description: string }[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
      <Reveal>
        <h2 className="text-2xl font-extrabold tracking-tight text-black uppercase sm:text-3xl">
          How we build your plan
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {steps.map((item, index) => (
          <Reveal key={item.step} delay={index * 0.08} y={16}>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-heading text-sm font-bold text-white">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-4 font-heading text-base font-bold text-black">{item.step}</p>
            <p className="mt-2 text-sm leading-relaxed text-black/55">{item.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
