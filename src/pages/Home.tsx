import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FloatingHelp from "@/components/FloatingHelp";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Hammer, 
  PaintBucket, 
  Home as HomeIcon, 
  Wrench, 
  ShieldCheck, 
  Star, 
  Clock,
  Users
} from "lucide-react";

const Home = () => {
  const services = [
    { icon: HomeIcon, name: "House Cleaning", description: "Professional maids and cleaners", popular: true },
    { icon: PaintBucket, name: "Painting", description: "Interior and exterior painters", popular: true },
    { icon: Hammer, name: "Construction", description: "Skilled construction workers", popular: false },
    { icon: Wrench, name: "Repairs", description: "Home maintenance experts", popular: true },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Verified Workers",
      description: "All workers are ID verified and background checked for your safety"
    },
    {
      icon: Star,
      title: "Quality Assured",
      description: "Real ratings and reviews from customers to help you choose the best"
    },
    {
      icon: Clock,
      title: "Quick Booking",
      description: "Book workers instantly or schedule for later - available 24/7"
    },
    {
      icon: Users,
      title: "Trusted Platform",
      description: "Join thousands of satisfied customers across major cities"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find skilled workers for all your home and business needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in bg-gradient-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    {service.popular && (
                      <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-accent hover:bg-accent-hover border-0">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose ShramSetu?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for reliable, skilled, and affordable labour solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-hero rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and skilled workers on ShramSetu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground px-8">
              Hire Workers Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8"
            >
              Register as Worker
            </Button>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-foreground/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold text-foreground">ShramSetu</span>
              </div>
              <p className="text-muted-foreground">
                Connecting skilled workers with opportunities across India.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>About Us</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Help Center</div>
                <div>Safety</div>
                <div>Terms</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Twitter</div>
                <div>LinkedIn</div>
                <div>Instagram</div>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 ShramSetu. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <FloatingHelp />
    </div>
  );
};

export default Home;