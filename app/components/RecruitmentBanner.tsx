import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const ACTIONS = [
  { label: "Recruitment", href: "/recruitment" },
  {
    label: "Register as Staff",
    href: "https://directlinkcare.com/20xapp.com/staff/register",
    external: true,
  },
  { label: "Timesheets", href: "/timesheets" },
];

export default function RecruitmentBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-brand">
        <Image
          src="/hero/person-centred-care.webp"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/95 to-brand-dark" />

        <div className="relative flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-4">
              <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                Recruitment
              </h2>
              <span className="h-px flex-1 bg-white/30" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
              Direct Link Care Ltd is a highly experienced nursing agency
              specialising in placing nurses and healthcare assistants at all
              levels across the NHS and private healthcare sectors —
              delivering a complete solution to your nursing, care and
              support needs.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:min-w-[240px]">
            {ACTIONS.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-brand-dark transition-colors hover:bg-white/90"
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
