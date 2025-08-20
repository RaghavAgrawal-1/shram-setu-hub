import { Button } from "@/components/ui/button";
import { Users, UserPlus, Star, CheckCircle } from "lucide-react";
import heroWorkers from "@/assets/hero-workers.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Users, label: "Active Workers", value: "10,000+" },
    { icon: CheckCircle, label: "Jobs Completed", value: "50,000+" },
    { icon: Star, label: "Average Rating", value: "4.8" },
  ];

  return (
    <section className="relative min-h-[80vh] bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              ShramSetu
              <span className="block text-3xl md:text-4xl lg:text-5xl text-primary-foreground/90 mt-2">
                Connecting Labour with Opportunities
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
              Find skilled workers for your home and business needs. From maids to carpenters, 
              painters to construction workers - all verified and rated by real customers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-8 py-4 text-lg shadow-hover transition-all duration-300 hover:scale-105"
              >
                <Users className="w-5 h-5 mr-2" />
                Hire Labour
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 text-lg backdrop-blur-sm"
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Register as Labour
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-foreground">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              <img 
                src={heroWorkers} 
                alt="Skilled workers including maids, painters, carpenters, and construction workers" 
                className="w-full h-auto rounded-2xl shadow-hover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;