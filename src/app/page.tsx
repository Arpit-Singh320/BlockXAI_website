import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { Services } from "@/components/home/Services";
import { WhyBlockXAI } from "@/components/home/WhyBlockXAI";
import { Industries } from "@/components/home/Industries";
import { Process } from "@/components/home/Process";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <WhyBlockXAI />
      <Industries />
      <Process />
      <ConsultationCTA />
    </>
  );
}
