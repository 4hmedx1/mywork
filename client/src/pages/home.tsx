import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import QualitiesSection from "@/components/qualities-section";
import BirthdaySection from "@/components/birthday-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <QualitiesSection />
      <BirthdaySection />
      <Footer />
    </div>
  );
}
