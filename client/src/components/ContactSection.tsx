import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MapPin, Clock, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { apiRequest } from "@/lib/queryClient";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: ""
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: (data: ContactForm) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", message: "" });
      queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-20 bg-charcoal text-white" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8" data-testid="contact-title">
              Visit Our Flagship
            </h2>
            <p className="text-xl font-lora mb-8 text-gray-300" data-testid="contact-subtitle">
              Experience the full LUXE RUN collection at our beautifully designed flagship store in Gangnam
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4" data-testid="store-address">
                <MapPin className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-white">Address</h3>
                  <p className="text-gray-300">
                    123 Apgujeong-ro, Gangnam-gu<br/>
                    Seoul, South Korea 06009
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4" data-testid="store-hours">
                <Clock className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-white">Hours</h3>
                  <div className="text-gray-300">
                    <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
                    <p>Saturday - Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4" data-testid="store-contact">
                <Phone className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-white">Contact</h3>
                  <div className="text-gray-300">
                    <p>+82-2-1234-5678</p>
                    <p>info@luxerun.kr</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <h3 className="font-semibold text-lg text-white mb-4">Personal Shopping Service</h3>
              <p className="text-gray-300 mb-4 font-lora">
                Book a private consultation with our expert stylists for a personalized shopping experience
              </p>
              <Button 
                className="bg-secondary text-charcoal hover:bg-secondary/90"
                data-testid="book-consultation-button"
              >
                Book Consultation
              </Button>
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-playfair font-bold text-charcoal mb-6" data-testid="contact-form-title">
                Get In Touch
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your Name"
                    className="w-full"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className="w-full"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="How can we help you?"
                    className="w-full"
                    data-testid="textarea-message"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-charcoal text-white hover:bg-charcoal/90"
                  disabled={contactMutation.isPending}
                  data-testid="submit-contact-form"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
