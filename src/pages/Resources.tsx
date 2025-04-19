
import React from "react";
import Navbar from "@/components/Navbar";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Resources = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
