import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import { SERVICES } from "../data";

export default function OtherServices({ currentSlug }: { currentSlug: string }) {
  const others = SERVICES.filter((service) => service.slug !== currentSlug);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
      <Reveal>
        <h2 className="text-2xl font-extrabold tracking-tight text-black uppercase sm:text-3xl">
          Explore our other services
        </h2>
      </Reveal>

      <div className="mt-8 flex flex-wrap gap-3">
        {others.map((service, index) => (
          <Reveal key={service.slug} delay={(index % 5) * 0.06} y={10}>
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-black/5"
            >
              {service.title}
              <ArrowIcon />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
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
