
import React from "react";
import Navbar from "@/components/Navbar";
import ResourceSubmissionForm from "@/components/ResourceSubmissionForm";
import Footer from "@/components/Footer";

const Contribution = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ResourceSubmissionForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contribution;
