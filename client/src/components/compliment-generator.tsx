import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wand2, Heart, Star } from "lucide-react";

const compliments = [
  "Noor Fatima, you are an absolutely beautiful human being whose presence makes the world brighter!",
  "Your kindness and genuine spirit make you one of the most amazing people on Earth, Noor Fatima!",
  "Noor Fatima, your positive energy and beautiful soul inspire everyone around you!",
  "You are incredibly special, Noor Fatima, and your beauty radiates from within!",
  "Noor Fatima, your wonderful personality and kind heart make you truly exceptional!",
  "Your smile is like sunshine, Noor Fatima - you bring so much joy to the world!",
  "Noor Fatima, you are a remarkable person with such a beautiful and caring nature!",
  "Your strength, beauty, and kindness make you absolutely incredible, Noor Fatima!"
];

export default function ComplimentGenerator() {
  const [currentComplimentIndex, setCurrentComplimentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateNewCompliment = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentComplimentIndex((prev) => (prev + 1) % compliments.length);
      setIsAnimating(false);
    }, 250);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-foreground">
          Daily Appreciation
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          Click the button below for a daily reminder of how amazing Noor Fatima is
        </p>
        
        <Card className="mb-8" data-testid="compliment-display">
          <CardContent className="p-8">
            <div className="mb-8">
              <p 
                className={`font-display text-2xl md:text-3xl font-semibold text-primary mb-4 transition-all duration-500 ${
                  isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
                }`}
              >
                "{compliments[currentComplimentIndex]}"
              </p>
              <div className="flex justify-center space-x-2">
                <Heart className="w-5 h-5 text-primary animate-pulse" />
                <Star className="w-5 h-5 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
                <Heart className="w-5 h-5 text-primary animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
            
            <Button
              onClick={generateNewCompliment}
              className="quality-button bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:from-primary/90 hover:to-accent/90"
              data-testid="button-generate-compliment"
            >
              <Wand2 className="w-5 h-5 mr-2" />
              Generate New Appreciation
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
