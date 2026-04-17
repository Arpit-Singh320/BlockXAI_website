import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import PlatformSection from "./components/PlatformSection";
import TestimonialSection from "./components/TestimonialSection";
import IndustrySection from "./components/IndustrySection";
import FeaturesSection from "./components/FeaturesSection";
import NewsletterSection from "./components/NewsletterSection";
import MissionCTASection from "./components/MissionCTASection";
import ContactSection from "./components/ContactSection";
import HowItHelpsSection from "./components/HowItHelpsSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MissionSection />
      <PlatformSection />
      <TestimonialSection />
      {/* <IndustrySection />
      <FeaturesSection /> */}
      {/* <NewsletterSection />
      <MissionCTASection /> */}
      <ContactSection />
      {/* <HowItHelpsSection /> */}
      {/* <FAQSection /> */}
      <Footer />
    </main>
  );
}
