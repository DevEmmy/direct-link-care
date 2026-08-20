import Reveal from "@/app/components/Reveal";

const ROLES = [
  {
    title: "Surgical & Medical Nurses",
    pay: "From £5,568/month",
    description:
      "Registered nurse placements across surgical and medical wards in the NHS and private healthcare.",
  },
  {
    title: "Healthcare Assistants",
    pay: "From £1,920/month",
    description:
      "HCA placements at all levels, supporting patients across NHS and private healthcare settings.",
  },
];

export default function RolesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
      <Reveal>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-semibold text-black">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Roles
        </span>

        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-black uppercase sm:text-4xl">
          Roles we&apos;re
          <br />
          <span className="text-brand">recruiting for</span>
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {ROLES.map((role, index) => (
          <Reveal
            key={role.title}
            delay={index * 0.1}
            y={16}
            className="rounded-2xl bg-brand-dark p-8"
          >
            <p className="font-heading text-xl font-bold text-white">{role.title}</p>
            <p className="mt-2 font-heading text-2xl font-extrabold text-white">
              {role.pay}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{role.description}</p>
            <p className="mt-6 text-xs text-white/40">
              Based on 12-hour shifts, 4 days a week, in selected locations. Paid weekly, every Friday.
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
