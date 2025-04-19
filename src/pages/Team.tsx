
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Github, Linkedin, Twitter } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Project Lead",
      description: "Ph.D in Computer Science with 15+ years of academic experience.",
      social: {
        twitter: "https://twitter.com/drkumar",
        linkedin: "https://linkedin.com/in/drkumar",
        github: "https://github.com/drkumar"
      }
    },
    {
      name: "Prof. Meera Sharma",
      role: "Content Curator",
      description: "Specializes in organizing and validating academic resources.",
      social: {
        twitter: "https://twitter.com/meerasharma",
        linkedin: "https://linkedin.com/in/meerasharma",
        github: "https://github.com/meerasharma"
      }
    },
    {
      name: "Prof. Amit Patel",
      role: "Technical Advisor",
      description: "Ensures quality and accessibility of digital resources.",
      social: {
        twitter: "https://twitter.com/amitpatel",
        linkedin: "https://linkedin.com/in/amitpatel",
        github: "https://github.com/amitpatel"
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

          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-10 w-10 text-primary animate-bounce-in" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/90 to-tertiary bg-clip-text text-transparent">
                Our Team
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the dedicated professionals behind BIET Resources Hub who work tirelessly to bring you quality academic resources.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border/50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                  <p className="text-primary text-center mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-center mb-4">{member.description}</p>
                  
                  {/* Social Media Links */}
                  <div className="flex justify-center gap-4 mt-4 opacity-80 hover:opacity-100 transition-opacity">
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
