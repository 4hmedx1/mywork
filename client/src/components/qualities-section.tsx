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
    id: "kindness",
    title: "Incredibly Kind",
    description: "Her compassion touches everyone she meets",
    detailTitle: "Incredibly Kind Heart",
    detailDescription: "Noor Fatima's kindness is truly remarkable. She has this amazing ability to show compassion and understanding in every interaction. Her kind heart makes her one of the most beautiful people anyone could know.",
    icon: Heart,
    color: "primary"
  },
  {
    id: "intelligence",
    title: "Brilliant Mind",
    description: "Her intelligence and wisdom inspire others",
    detailTitle: "Brilliant and Wise",
    detailDescription: "Her intelligence shines in everything she does. Noor Fatima has this wonderful way of understanding complex situations and offering thoughtful perspectives that inspire those around her.",
    icon: Brain,
    color: "accent"
  },
  {
    id: "beauty",
    title: "Beautiful Soul",
    description: "Inner and outer beauty that radiates joy",
    detailTitle: "Beautiful Inside and Out",
    detailDescription: "Noor Fatima possesses a rare combination of inner and outer beauty. Her genuine smile and radiant personality make her absolutely stunning. She's proof that true beauty comes from within.",
    icon: Star,
    color: "primary"
  },
  {
    id: "strength",
    title: "Strong Spirit",
    description: "Resilient and determined in all she does",
    detailTitle: "Strong and Resilient",
    detailDescription: "Her strength and determination are truly admirable. Noor Fatima faces challenges with grace and perseverance, inspiring others with her resilient spirit and positive attitude.",
    icon: Mountain,
    color: "accent"
  },
  {
    id: "humor",
    title: "Amazing Sense of Humor",
    description: "Brings joy and laughter wherever she goes",
    detailTitle: "Wonderful Sense of Humor",
    detailDescription: "Her laughter is infectious and her sense of humor brings joy to everyone around her. Noor Fatima has this amazing gift of finding lightness and fun in any situation.",
    icon: Smile,
    color: "primary"
  },
  {
    id: "creativity",
    title: "Creative Spirit",
    description: "Her creativity knows no bounds",
    detailTitle: "Creative and Imaginative",
    detailDescription: "Her creative spirit and imagination are truly inspiring. Noor Fatima approaches life with such creativity and originality, making everything she touches more beautiful and meaningful.",
    icon: Palette,
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
            What Makes Her Special
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on each quality to see why Noor Fatima is such an incredible person
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
