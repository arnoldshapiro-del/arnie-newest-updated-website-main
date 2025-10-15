import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DoctorIntroSection from "@/components/DoctorIntroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ApproachSection from "@/components/ApproachSection";
import { FAQSection } from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DoctorIntroSection />
      <AboutSection />
      <ServicesSection />
      <ApproachSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default Index;
