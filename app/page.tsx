import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import RecruitmentBanner from "./components/RecruitmentBanner";
import Services from "./components/Services";
import Stats from "./components/Stats";
import TrustLogos from "./components/TrustLogos";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main className="flex-1 bg-zinc-50">
      <Hero />
      <Welcome />
      <Stats />
      <WhyChooseUs />
      <Services />
      <RecruitmentBanner />
      <TrustLogos />
    </main>
  );
}
