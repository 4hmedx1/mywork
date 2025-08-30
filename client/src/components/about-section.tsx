import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, Heart, Star, Crown } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About This Amazing Person
          </h2>
          <p className="text-lg text-muted-foreground">
            Noor Fatima represents everything wonderful about humanity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="appreciation-card" data-testid="about-card-presence">
              <CardContent className="p-6">
                <h3 className="font-display text-2xl font-semibold mb-4 text-primary flex items-center">
                  <Sparkles className="w-6 h-6 mr-3" />
                  A Radiant Presence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Noor Fatima brings light into every room she enters. Her positive energy and warm smile 
                  have the power to brighten anyone's day. She's genuinely one of the most beautiful people, 
                  inside and out.
                </p>
              </CardContent>
            </Card>
            
            <Card className="appreciation-card" data-testid="about-card-friend">
              <CardContent className="p-6">
                <h3 className="font-display text-2xl font-semibold mb-4 text-accent flex items-center">
                  <Users className="w-6 h-6 mr-3" />
                  A True Friend
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Her loyalty, understanding, and genuine care for others make her an exceptional human being. 
                  Noor Fatima has a gift for making people feel valued and appreciated.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center border-4 border-card shadow-xl animate-float">
                <div className="text-center" data-testid="about-avatar">
                  <Crown className="w-16 h-16 text-primary mb-4 mx-auto" />
                  <p className="font-display text-lg text-muted-foreground">Noor Fatima</p>
                  <p className="text-sm text-muted-foreground">An Amazing Human Being</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Heart className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <Star className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
