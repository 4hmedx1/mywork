import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import QualitiesSection from "@/components/qualities-section";
import AboutSection from "@/components/about-section";
import MessagesGallery from "@/components/messages-gallery";
import AppreciationStats from "@/components/appreciation-stats";
import ComplimentGenerator from "@/components/compliment-generator";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <QualitiesSection />
      <AboutSection />
      <MessagesGallery />
      <AppreciationStats />
      <ComplimentGenerator />
      <ContactSection />
      <Footer />
    </div>
  );
}
