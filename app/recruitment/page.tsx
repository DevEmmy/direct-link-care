import type { Metadata } from "next";
import RecruitmentHero from "./_components/RecruitmentHero";
import RolesSection from "./_components/RolesSection";
import BenefitsGrid from "./_components/BenefitsGrid";
import ApplicationProcess from "./_components/ApplicationProcess";
import RegisterCta from "./_components/RegisterCta";

export const metadata: Metadata = {
  title: "Recruitment | Direct Link Care",
  description:
    "Direct Link Care is a nursing agency placing nurses and healthcare assistants across the NHS and private healthcare sectors, with weekly pay and dedicated support.",
};

export default function RecruitmentPage() {
  return (
    <main className="flex-1 bg-zinc-50">
      <RecruitmentHero />
      <RolesSection />
      <BenefitsGrid />
      <ApplicationProcess />
      <RegisterCta />
    </main>
  );
}
