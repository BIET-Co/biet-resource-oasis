
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Project Lead",
      description: "Ph.D in Computer Science with 15+ years of academic experience.",
    },
    {
      name: "Prof. Meera Sharma",
      role: "Content Curator",
      description: "Specializes in organizing and validating academic resources.",
    },
    {
      name: "Prof. Amit Patel",
      role: "Technical Advisor",
      description: "Ensures quality and accessibility of digital resources.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the dedicated professionals behind BIET Resources Hub who work tirelessly to bring you quality academic resources.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-card border border-border/50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                  <p className="text-primary text-center mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-center">{member.description}</p>
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
