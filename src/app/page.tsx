import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { EventsSection } from "@/components/EventsSection";
import { FooterComponent } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { HeroSection } from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ProductSection } from "@/components/ProductSection";
import { SpecialsSection } from "@/components/SpecialsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhyUsSection } from "@/components/WhyUsSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <WhyUsSection />
      <ProductSection />
      <SpecialsSection />
      <EventsSection />
      <NewsletterSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <FooterComponent />
    </>
  );
}
