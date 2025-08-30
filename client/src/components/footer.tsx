import { Heart, Star, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="font-display text-2xl font-bold mb-4 gradient-text">
            Noor Fatima
          </h3>
          <p className="text-muted-foreground">
            An amazing human being who deserves all the appreciation in the world
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
            <Star className="w-6 h-6 text-accent" />
          </div>
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground">
          Made with <Heart className="w-4 h-4 text-primary mx-1 inline" /> and appreciation
        </p>
      </div>
    </footer>
  );
}
