import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";

const ResourceSubmissionForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailConfig, setEmailConfig] = useState({
    publicKey: localStorage.getItem('emailjs_public_key') || '',
    templateId: localStorage.getItem('emailjs_template_id') || '',
    serviceId: localStorage.getItem('emailjs_service_id') || '',
  });
  const [formData, setFormData] = useState({
    name: "",
    usn: "",
    college: "",
    resourceTitle: "",
    resourceType: "",
    resourceUrl: "",
    description: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleConfigChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    localStorage.setItem(id, value);
    setEmailConfig(prev => ({ ...prev, [id.replace('emailjs_', '')]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!emailConfig.publicKey || !emailConfig.templateId || !emailConfig.serviceId) {
        throw new Error("Please fill in all EmailJS credentials below the form.");
      }

      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: formData.name,
          usn: formData.usn,
          college: formData.college,
          resource_title: formData.resourceTitle,
          resource_type: formData.resourceType,
          resource_url: formData.resourceUrl,
          description: formData.description
        },
        emailConfig.publicKey
      );

      toast({
        title: "Success!",
        description: "Your resource has been submitted successfully.",
      });

      navigate("/resources");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit resource",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold text-primary">Submit a Resource</CardTitle>
          <CardDescription className="text-lg">Share your academic resources with fellow students</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="transition-all duration-200 focus:scale-[1.01]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="usn">USN (University Seat Number)</Label>
                <Input 
                  id="usn" 
                  placeholder="Enter your USN"
                  value={formData.usn}
                  onChange={handleChange}
                  required 
                  className="transition-all duration-200 focus:scale-[1.01]"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="college">College Name</Label>
              <Input 
                id="college" 
                placeholder="Enter your college name"
                value={formData.college}
                onChange={handleChange}
                required 
                className="transition-all duration-200 focus:scale-[1.01]"
              />
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="resourceTitle">Resource Title</Label>
                <Input 
                  id="resourceTitle" 
                  placeholder="Enter resource title"
                  value={formData.resourceTitle}
                  onChange={handleChange}
                  required 
                  className="transition-all duration-200 focus:scale-[1.01]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="resourceType">Resource Type</Label>
                <Input 
                  id="resourceType" 
                  placeholder="Notes/Question Papers/Study Materials"
                  value={formData.resourceType}
                  onChange={handleChange}
                  required 
                  className="transition-all duration-200 focus:scale-[1.01]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="resourceUrl">Resource URL</Label>
              <Input 
                id="resourceUrl" 
                type="url"
                placeholder="https://example.com/your-resource"
                value={formData.resourceUrl}
                onChange={handleChange}
                required 
                className="transition-all duration-200 focus:scale-[1.01]"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                placeholder="Brief description about the resource"
                value={formData.description}
                onChange={handleChange}
                required 
                className="min-h-[100px] transition-all duration-200 focus:scale-[1.01]"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 transition-all duration-200 transform hover:scale-[1.02]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Resource"}
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t">
            <h3 className="text-lg font-semibold mb-4">EmailJS Configuration</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="emailjs_publicKey">Public Key</Label>
                <Input
                  id="emailjs_publicKey"
                  value={emailConfig.publicKey}
                  onChange={handleConfigChange}
                  placeholder="Enter EmailJS Public Key"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="emailjs_templateId">Template ID</Label>
                <Input
                  id="emailjs_templateId"
                  value={emailConfig.templateId}
                  onChange={handleConfigChange}
                  placeholder="Enter EmailJS Template ID"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="emailjs_serviceId">Service ID</Label>
                <Input
                  id="emailjs_serviceId"
                  value={emailConfig.serviceId}
                  onChange={handleConfigChange}
                  placeholder="Enter EmailJS Service ID"
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourceSubmissionForm;
