import { Card, CardContent } from "@/components/ui/card";
import { Cake, Gift, PartyPopper, Sparkles } from "lucide-react";

export default function BirthdaySection() {
  return (
    <section id="birthday" className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            🎉 Happy Birthday Noor Fatima! 🎉
          </h2>
          <p className="text-lg text-muted-foreground">
            Celebrating an amazing person on her special day
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="appreciation-card" data-testid="birthday-card-wishes">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cake className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Birthday Wishes</h3>
              <p className="text-muted-foreground">
                May your special day be filled with happiness, joy, and all the beautiful things you deserve
              </p>
            </CardContent>
          </Card>
          
          <Card className="appreciation-card" data-testid="birthday-card-celebration">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <PartyPopper className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Celebration</h3>
              <p className="text-muted-foreground">
                Today we celebrate not just your birthday, but the amazing person you are every single day
              </p>
            </CardContent>
          </Card>
          
          <Card className="appreciation-card" data-testid="birthday-card-gift">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Special Gift</h3>
              <p className="text-muted-foreground">
                Your presence in this world is a gift to everyone who knows you, Noor Fatima
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-card rounded-lg p-8 border border-border">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <p className="font-display text-2xl md:text-3xl font-semibold text-primary mb-4">
            "Wishing you the most wonderful birthday!"
          </p>
          <p className="text-lg text-muted-foreground">
            Birthday Date: <span className="font-semibold text-foreground">September 2nd / August 22nd</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            (Please let me know which date is correct!)
          </p>
        </div>
      </div>
    </section>
  );
}