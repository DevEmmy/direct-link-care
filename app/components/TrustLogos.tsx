import Image from "next/image";
import Reveal from "./Reveal";

const ACCREDITATIONS = [
  { name: "Skills for Care", src: "/logos/accreditations/skills-for-care.png" },
  { name: "QMS ISO 9001:2015", src: "/logos/accreditations/qms-iso-9001.png" },
  { name: "Information Commissioner's Office", src: "/logos/accreditations/ico.png" },
  { name: "OACP", src: "/logos/accreditations/oacp.png" },
  { name: "Thames Valley Chamber of Commerce", src: "/logos/accreditations/thames-valley-chamber.png" },
  { name: "REC Member", src: "/logos/accreditations/rec-member.png" },
];

const COUNCILS = [
  { name: "Oxfordshire County Council", src: "/logos/councils/oxfordshire-county-council.jpg" },
  { name: "Slough Borough Council", src: "/logos/councils/slough-borough-council.jpg" },
  { name: "Buckinghamshire Council", src: "/logos/councils/buckinghamshire-council.png" },
  { name: "Ealing", src: "/logos/councils/ealing.jpg" },
];

export default function TrustLogos() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
      <LogoRow title="We're proud to hold the following accreditations" logos={ACCREDITATIONS} />
      <LogoRow title="Local authorities we work with" logos={COUNCILS} className="mt-16" />
    </section>
  );
}

function LogoRow({
  title,
  logos,
  className,
}: {
  title: string;
  logos: { name: string; src: string }[];
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <h3 className="text-center font-heading text-lg font-bold text-black sm:text-xl">
        {title}
      </h3>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
        {logos.map((logo, index) => (
          <Reveal
            key={logo.name}
            delay={index * 0.06}
            y={12}
            className="relative h-10 w-28 grayscale transition-all duration-200 hover:grayscale-0 sm:h-11 sm:w-32"
          >
            <Image src={logo.src} alt={logo.name} fill sizes="140px" className="object-contain" />
          </Reveal>
        ))}
      </div>
    </Reveal>
  );
}
