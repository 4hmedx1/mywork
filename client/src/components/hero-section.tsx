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
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Noor Fatima
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light max-w-2xl mx-auto">
            A celebration of an amazing human being whose kindness and beauty inspire everyone around her
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToQualities}
              className="quality-button bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90"
              data-testid="button-discover-qualities"
            >
              <Heart className="w-4 h-4 mr-2" />
              Discover Her Qualities
            </Button>
            <Button
              onClick={scrollToMessages}
              variant="outline"
              className="quality-button bg-accent text-accent-foreground px-8 py-4 rounded-lg font-medium hover:bg-accent/90"
              data-testid="button-read-messages"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Read Messages
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
