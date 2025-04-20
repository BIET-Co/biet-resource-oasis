
import React from "react";
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ResourceSubmissionForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later with backend integration
  };

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">Submit a Resource</CardTitle>
          <CardDescription>Share your academic resources with fellow students</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your full name" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="usn">USN (University Seat Number)</Label>
              <Input id="usn" placeholder="Enter your USN" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="college">College Name</Label>
              <Input id="college" placeholder="Enter your college name" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="resourceTitle">Resource Title</Label>
              <Input id="resourceTitle" placeholder="Enter resource title" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="resourceType">Resource Type</Label>
              <Input id="resourceType" placeholder="Notes/Question Papers/Study Materials" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input id="description" placeholder="Brief description about the resource" required />
            </div>
            
            <Button type="submit" className="w-full">Submit Resource</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourceSubmissionForm;
