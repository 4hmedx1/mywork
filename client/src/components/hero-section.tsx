import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToQualities = () => {
    const element = document.getElementById("qualities");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToMessages = () => {
    const element = document.getElementById("messages");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Beautiful soothing background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-rose-200 via-pink-100 to-purple-200" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-300/20 via-pink-200/30 to-rose-300/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 182, 193, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(216, 191, 216, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, rgba(255, 218, 185, 0.2) 0%, transparent 50%)`
        }} />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <div className="relative mb-2">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground relative z-10">
              Noor Fatima
            </h1>
            <h2>"ronaldo suiii"</h2>
           


          </div>
          <div className="flex justify-center mt-16">
            <Button
              onClick={scrollToQualities}
              className="quality-button bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90"
              data-testid="button-gen1"
            >
              Gen1
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
