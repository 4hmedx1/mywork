import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Brain, Star, Mountain, Smile, Palette, X } from "lucide-react";

interface Quality {
  id: string;
  title: string;
  description: string;
  detailTitle: string;
  detailDescription: string;
  icon: any;
  color: string;
}

const qualities: Quality[] = [
  
  {
    id: "intelligence",
    title: "Brilliant Mind",
    description: "gen1 mind hai",
    detailTitle: "Brilliant and Wise",
    detailDescription: "gen1 mind hai.",
    icon: Brain,
    color: "accent"
  },
  {
    id: "beauty",
    title: "Beautiful Soul",
    description: "gen1 soul hai",
    detailTitle: "Beautiful Inside and Out",
    detailDescription: "sab kuch gen1",
    icon: Star,
    color: "primary"
  },
  {
    id: "strength",
    title: "Strong Spirit",
    description: "gen1 spirit hai",
    detailTitle: "Strong and Resilient",
    detailDescription: "ronaldo is the GOAT",
    icon: Mountain,
    color: "accent"
  }
];

export default function QualitiesSection() {
  const [selectedQuality, setSelectedQuality] = useState<Quality | null>(null);

  const showQualityDetail = (quality: Quality) => {
    setSelectedQuality(quality);
  };

  const hideQualityDetail = () => {
    setSelectedQuality(null);
  };

  return (
    <section id="qualities" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {qualities.map((quality) => {
            const IconComponent = quality.icon;
            return (
              <Card
                key={quality.id}
                className="appreciation-card cursor-pointer"
                onClick={() => showQualityDetail(quality)}
                data-testid={`quality-card-${quality.id}`}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-${quality.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`w-8 h-8 text-${quality.color}`} />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{quality.title}</h3>
                  <p className="text-muted-foreground">{quality.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Quality Detail Modal */}
        {selectedQuality && (
          <Card className="animate-fade-in" data-testid="quality-detail">
            <CardContent className="p-8 text-center">
              <h3 className="font-display text-3xl font-bold mb-4 text-primary">
                {selectedQuality.detailTitle}
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {selectedQuality.detailDescription}
              </p>
              <Button
                onClick={hideQualityDetail}
                variant="outline"
                className="px-6 py-3"
                data-testid="button-close-quality-detail"
              >
                <X className="w-4 h-4 mr-2" />
                Close
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
