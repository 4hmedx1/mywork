import { Card, CardContent } from "@/components/ui/card";
import { Infinity, Crown, Award } from "lucide-react";

export default function AppreciationStats() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Why She's Simply The Best
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center" data-testid="stat-infinite">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Infinity className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-2">Infinite</h3>
            <p className="text-muted-foreground">Kindness that knows no bounds</p>
          </div>
          
          <div className="text-center" data-testid="stat-exceptional">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Crown className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-2">Exceptional</h3>
            <p className="text-muted-foreground">A truly remarkable human being</p>
          </div>
          
          <div className="text-center" data-testid="stat-outstanding">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-2">Outstanding</h3>
            <p className="text-muted-foreground">Excellence in everything she does</p>
          </div>
        </div>
      </div>
    </section>
  );
}
