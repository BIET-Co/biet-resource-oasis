
import React from "react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 relative bg-primary/5 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-secondary/40 to-tertiary/20"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card shadow-xl rounded-2xl p-8 md:p-12 border border-border/50 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Make it a habit. Your academic journey just got smoother.</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Bookmark this hub for quick access to essential resources whenever you need them.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="#resources" className="px-8">
                  Explore Resources
                </a>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
                <a href="#" className="px-8">
                  Submit a Resource
                </a>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-4 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Community Driven</h3>
              <p className="text-foreground/70 text-sm">
                Join fellow BIETians in building a valuable resource repository.
              </p>
            </div>
            
            <div className="text-center p-4 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M2 3h20"></path>
                  <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
                  <path d="m7 21 5-5 5 5"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Academic Success</h3>
              <p className="text-foreground/70 text-sm">
                Enhance your learning with high-quality curated materials.
              </p>
            </div>
            
            <div className="text-center p-4 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 12-4 4-4-4"></path>
                  <path d="M12 8v8"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Always Available</h3>
              <p className="text-foreground/70 text-sm">
                Access resources anytime, anywhere to aid your studies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
