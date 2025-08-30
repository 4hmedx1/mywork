import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "Both name and message are required.",
        variant: "destructive"
      });
      return;
    }

    // For GitHub Pages deployment, we'll just show a success message
    toast({
      title: "Thank you for your appreciation!",
      description: "Your message has been received. Noor Fatima will be touched by your kind words.",
    });

    // Reset form
    setFormData({ name: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-foreground">
          Share Your Appreciation
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          Want to add your own message of appreciation for Noor Fatima?
        </p>
        
        <Card className="max-w-2xl mx-auto" data-testid="contact-form-card">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full"
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Share what makes Noor Fatima special to you..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full resize-none"
                  data-testid="textarea-message"
                />
              </div>
              
              <Button
                type="submit"
                className="quality-button w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:bg-primary/90"
                data-testid="button-submit-appreciation"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Appreciation
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
