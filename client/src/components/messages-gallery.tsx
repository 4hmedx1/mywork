import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, Sun, Gem, Rainbow, Heart } from "lucide-react";

interface Message {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  icon: any;
  color: string;
}

const messages: Message[] = [
  {
    id: "appreciation",
    title: "Appreciation Note",
    subtitle: "From a friend",
    content: "Noor Fatima is one of those rare people who makes the world a better place just by being in it. Her kindness and genuine nature are truly inspiring.",
    icon: Quote,
    color: "primary"
  },
  {
    id: "admiration",
    title: "Admiration",
    subtitle: "Heartfelt thoughts",
    content: "Her positive energy is absolutely contagious. Noor Fatima has this amazing ability to make everyone feel special and valued. She's truly beautiful inside and out.",
    icon: Star,
    color: "accent"
  },
  {
    id: "brightness",
    title: "Brightness",
    subtitle: "A ray of sunshine",
    content: "She brings so much joy and positivity to every situation. Noor Fatima's smile can literally light up a room, and her laughter is the most beautiful sound.",
    icon: Sun,
    color: "primary"
  },
  {
    id: "precious",
    title: "Precious Soul",
    subtitle: "A rare gem",
    content: "There's something truly special about Noor Fatima. Her authenticity and genuine care for others make her a precious person in this world.",
    icon: Gem,
    color: "accent"
  },
  {
    id: "colorful",
    title: "Colorful Spirit",
    subtitle: "Vibrant personality",
    content: "Noor Fatima adds color to life with her vibrant personality and positive outlook. She's the kind of person who makes ordinary moments feel extraordinary.",
    icon: Rainbow,
    color: "primary"
  },
  {
    id: "helping",
    title: "Helping Hand",
    subtitle: "Always there for others",
    content: "Her willingness to help others and her generous spirit make her an absolute treasure. Noor Fatima is the embodiment of goodness and grace.",
    icon: Heart,
    color: "accent"
  }
];

export default function MessagesGallery() {
  return (
    <section id="messages" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Messages of Appreciation
          </h2>
          <p className="text-lg text-muted-foreground">
            Thoughts and appreciation for an incredible person
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {messages.map((message) => {
            const IconComponent = message.icon;
            return (
              <Card key={message.id} className="appreciation-card" data-testid={`message-card-${message.id}`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-${message.color}/10 rounded-full flex items-center justify-center mr-4`}>
                      <IconComponent className={`w-6 h-6 text-${message.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{message.title}</h4>
                      <p className="text-sm text-muted-foreground">{message.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{message.content}"
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
