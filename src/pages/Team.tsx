
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Github, Linkedin, Twitter, Mail } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Project Lead",
      description: "Ph.D in Computer Science with 15+ years of academic experience.",
      image: "/placeholder.svg", // You can replace with actual images later
      social: {
        twitter: "https://twitter.com/drkumar",
        linkedin: "https://linkedin.com/in/drkumar",
        github: "https://github.com/drkumar",
        email: "mailto:rajesh.kumar@example.com"
      }
    },
    {
      name: "Prof. Meera Sharma",
      role: "Content Curator",
      description: "Specializes in organizing and validating academic resources.",
      image: "/placeholder.svg",
      social: {
        twitter: "https://twitter.com/meerasharma",
        linkedin: "https://linkedin.com/in/meerasharma",
        github: "https://github.com/meerasharma",
        email: "mailto:meera.sharma@example.com"
      }
    },
    {
      name: "Prof. Amit Patel",
      role: "Technical Advisor",
      description: "Ensures quality and accessibility of digital resources.",
      image: "/placeholder.svg",
      social: {
        twitter: "https://twitter.com/amitpatel",
        linkedin: "https://linkedin.com/in/amitpatel",
        github: "https://github.com/amitpatel",
        email: "mailto:amit.patel@example.com"
      }
    },
    {
      name: "Dr. Ananya Singh",
      role: "Research Coordinator",
      description: "Coordinates research initiatives and academic partnerships.",
      image: "/placeholder.svg",
      social: {
        twitter: "https://twitter.com/ananyasingh",
        linkedin: "https://linkedin.com/in/ananyasingh",
        github: "https://github.com/ananyasingh",
        email: "mailto:ananya.singh@example.com"
      }
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10"></div>
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
          
          {/* Animated grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(100,100,100,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,100,0.05)_1px,transparent_1px)] bg-[size:40px_40px] -z-10 opacity-60"></div>

          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-10 w-10 text-primary animate-bounce-in" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/90 to-tertiary bg-clip-text text-transparent">
                Meet Our Talented Team
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The brilliant minds behind BIET Resources Hub who work tirelessly to bring you quality academic resources.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border/50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative w-24 h-24 mx-auto mb-6 overflow-hidden rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover opacity-0"
                      onError={(e) => {
                        e.currentTarget.style.opacity = "0";
                      }}
                    />
                    <Users className="absolute h-12 w-12 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-center mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-primary text-center mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-center mb-6">{member.description}</p>
                  
                  {/* Social Media Links */}
                  <div className="flex justify-center gap-4 mt-4">
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors duration-200 hover:scale-125 transform p-2"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors duration-200 hover:scale-125 transform p-2"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors duration-200 hover:scale-125 transform p-2"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.email}
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors duration-200 hover:scale-125 transform p-2"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Team stats section with animations */}
            <div className="mt-24 bg-card border border-border/50 rounded-xl p-10 shadow-lg animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Collective Experience</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="p-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-primary mb-2 animate-bounce-in" style={{ animationDelay: '200ms' }}>50+</div>
                  <p className="text-muted-foreground">Years Combined Experience</p>
                </div>
                
                <div className="p-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-primary mb-2 animate-bounce-in" style={{ animationDelay: '400ms' }}>200+</div>
                  <p className="text-muted-foreground">Research Papers</p>
                </div>
                
                <div className="p-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-primary mb-2 animate-bounce-in" style={{ animationDelay: '600ms' }}>15+</div>
                  <p className="text-muted-foreground">Academic Awards</p>
                </div>
                
                <div className="p-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-primary mb-2 animate-bounce-in" style={{ animationDelay: '800ms' }}>5000+</div>
                  <p className="text-muted-foreground">Students Helped</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Team;
