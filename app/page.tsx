import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (<>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <Pricing />
    <ContactSection />
    <Footer />
  </>);
}
