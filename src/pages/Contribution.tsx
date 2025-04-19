
import React from "react";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Contribution = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contribution;
