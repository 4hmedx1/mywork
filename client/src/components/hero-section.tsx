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
      {/* Beautiful nature background with flowers */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 opacity-50" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')] bg-cover bg-center opacity-20" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <div className="relative mb-6">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground relative z-10">
              Noor Fatima
            </h1>
            {/* Decorative flowers around the name */}
            <div className="absolute -top-4 -left-8 text-3xl animate-float" style={{ animationDelay: '0s' }}>🌸</div>
            <div className="absolute -top-6 -right-4 text-2xl animate-float" style={{ animationDelay: '1s' }}>🌺</div>
            <div className="absolute -bottom-2 -left-6 text-2xl animate-float" style={{ animationDelay: '2s' }}>🌼</div>
            <div className="absolute -bottom-4 -right-8 text-3xl animate-float" style={{ animationDelay: '1.5s' }}>🌷</div>
          </div>
          <div className="flex justify-center">
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
