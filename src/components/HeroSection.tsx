
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10"></div>
      
      {/* Animated circles */}
      <div className="absolute top-20 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,100,100,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,100,0.05)_1px,transparent_1px)] bg-[size:40px_40px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/90 to-tertiary bg-clip-text text-transparent">
            Curated Excellence for Every BIETian.
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            One destination for all your academic needs – Notes, Question Papers, and More.
          </p>
          <Button asChild size="lg" className="animate-bounce-in" variant="default">
            <a href="#resources" className="text-lg px-8 py-6">
              Explore Resources
            </a>
          </Button>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-repeat-x bg-bottom -z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="currentColor" fillOpacity="0.05" d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,165.3C672,171,768,149,864,149.3C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
