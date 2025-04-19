
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Platform</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="bg-card shadow-lg rounded-2xl p-8 md:p-10 border border-border/50 hover:shadow-xl transition-shadow duration-300 animate-scale-in">
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              BIET Resources Hub is your one-stop portal for semester-wise, branch-specific academic materials, curated with precision to help you succeed.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-background/70 p-6 rounded-xl border border-border/30 hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Organized Resources</h3>
                <p className="text-foreground/80">
                  All academic materials are carefully categorized by semester, branch, and subject for quick access.
                </p>
              </div>
              
              <div className="bg-background/70 p-6 rounded-xl border border-border/30 hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
                    <path d="M12 13v9"></path>
                    <path d="M12 2v4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Curation</h3>
                <p className="text-foreground/80">
                  Each resource is reviewed for accuracy and relevance to your curriculum requirements.
                </p>
              </div>
              
              <div className="bg-background/70 p-6 rounded-xl border border-border/30 hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h3.8a2 2 0 0 0 1.4-.6L12 4.8a2 2 0 0 1 1.4-.6h3.8a2 2 0 0 1 2 2v2.2Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Collection</h3>
                <p className="text-foreground/80">
                  From lecture notes to question papers, find everything you need for academic success.
                </p>
              </div>
              
              <div className="bg-background/70 p-6 rounded-xl border border-border/30 hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Regular Updates</h3>
                <p className="text-foreground/80">
                  Stay current with the latest materials and resources added regularly to support your studies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
