import { Card, CardContent } from "@/components/ui/card";
import { Cake, Gift, PartyPopper, Sparkles } from "lucide-react";

export default function BirthdaySection() {
  return (
    <section id="birthday" className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
             Her Birthday! 
          </h2>
          <p className="text-lg text-muted-foreground">
           
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
        </div>
        
        <div className="bg-card rounded-lg p-8 border border-border">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <p className="font-display text-2xl md:text-3xl font-semibold text-primary mb-4">
      
          </p>
          <p className="text-lg text-muted-foreground">
            Birthday Date: <span className="font-semibold text-foreground">August 22nd</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            (hopefully yehi hai)
          </p>
        </div>
      </div>
    </section>
  );
}