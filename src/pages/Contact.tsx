
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { Mail, User, Phone, MessageSquare, Send } from "lucide-react";

const EMAILJS_KEY_STORAGE = {
  publicKey: "emailjs_public_key",
  serviceId: "emailjs_service_id",
  templateId: "emailjs_template_id",
};

const getEmailConfig = () => ({
  publicKey: localStorage.getItem(EMAILJS_KEY_STORAGE.publicKey) || "",
  serviceId: localStorage.getItem(EMAILJS_KEY_STORAGE.serviceId) || "",
  templateId: localStorage.getItem(EMAILJS_KEY_STORAGE.templateId) || "",
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    usn: "",
    college: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailConfig, setEmailConfig] = useState(getEmailConfig());
  const [showConfig, setShowConfig] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleConfigChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const storageKey =
      id === "publicKey"
        ? EMAILJS_KEY_STORAGE.publicKey
        : id === "serviceId"
        ? EMAILJS_KEY_STORAGE.serviceId
        : EMAILJS_KEY_STORAGE.templateId;
    localStorage.setItem(storageKey, value);
    setEmailConfig((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check config
    if (
      !emailConfig.publicKey ||
      !emailConfig.serviceId ||
      !emailConfig.templateId
    ) {
      toast({
        variant: "destructive",
        title: "EmailJS Not Configured",
        description: "Please enter all EmailJS credentials below.",
      });
      setShowConfig(true);
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: form.name,
          usn: form.usn,
          college: form.college,
          phone: form.phone,
          email: form.email,
          message: form.message,
        },
        emailConfig.publicKey
      );
      toast({
        title: "Message Sent!",
        description: "We'll get in touch with you soon.",
      });
      setForm({
        name: "",
        usn: "",
        college: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Email failed",
        description:
          err instanceof Error
            ? err.message
            : "Could not send your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#f1f0fb] to-[#e5deff] dark:from-background dark:to-[#221f26] animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-center text-primary tracking-tight">
                Contact Us
              </h1>
              <p className="text-muted-foreground mb-8 text-center text-lg">
                Have questions or suggestions? Fill the form below and we'll be in touch!
              </p>
              <form
                className="bg-card shadow-xl rounded-lg p-8 space-y-6"
                style={{
                  boxShadow:
                    "0 6px 32px 0 rgba(123,97,255,0.08),0 1.5px 4px 0 rgba(123,97,255,0.05)",
                }}
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User size={18} /> Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="mt-1 focus:scale-[1.01] transition duration-100"
                    />
                  </div>
                  <div>
                    <Label htmlFor="usn" className="flex items-center gap-2">
                      <User size={18} /> USN
                    </Label>
                    <Input
                      id="usn"
                      type="text"
                      value={form.usn}
                      onChange={handleChange}
                      required
                      placeholder="Enter your USN"
                      className="mt-1 focus:scale-[1.01] transition duration-100"
                    />
                  </div>
                  <div>
                    <Label htmlFor="college" className="flex items-center gap-2">
                      <User size={18} /> College
                    </Label>
                    <Input
                      id="college"
                      type="text"
                      value={form.college}
                      onChange={handleChange}
                      required
                      placeholder="Your college"
                      className="mt-1 focus:scale-[1.01] transition duration-100"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone size={18} /> Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="Phone number"
                      pattern="[0-9]{10,15}"
                      className="mt-1 focus:scale-[1.01] transition duration-100"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail size={18} /> Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="mt-1 focus:scale-[1.01] transition duration-100"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <MessageSquare size={18} /> Message
                  </Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-1 min-h-[100px] focus:scale-[1.01] transition duration-100"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full flex gap-2 items-center justify-center bg-primary hover:bg-primary/90 text-lg font-bold shadow hover:scale-105 transition"
                  disabled={isSubmitting}
                >
                  <Send size={20} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                <div className="text-center text-xs text-gray-500 mt-2">
                  We'll never share your info with anyone.
                </div>
              </form>

              <button
                className="mx-auto flex items-center gap-1 mt-8 text-xs text-primary/70 hover:underline"
                onClick={() => setShowConfig((v) => !v)}
                type="button"
                style={{ marginBottom: showConfig ? 0 : "2rem" }}
              >
                {showConfig ? "Hide" : "Show"} EmailJS Configuration
              </button>
              {showConfig && (
                <div className="mt-4 bg-white border rounded-lg p-5 shadow space-y-4">
                  <h3 className="font-semibold text-primary text-sm flex items-center gap-2 mb-2">
                    <Mail size={16} /> EmailJS Credentials
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="serviceId">Service ID</Label>
                      <Input
                        id="serviceId"
                        value={emailConfig.serviceId}
                        onChange={handleConfigChange}
                        placeholder="Enter Service ID"
                        className="mt-1"
                        autoComplete="off"
                      />
                    </div>
                    <div>
                      <Label htmlFor="templateId">Template ID</Label>
                      <Input
                        id="templateId"
                        value={emailConfig.templateId}
                        onChange={handleConfigChange}
                        placeholder="Enter Template ID"
                        className="mt-1"
                        autoComplete="off"
                      />
                    </div>
                    <div>
                      <Label htmlFor="publicKey">Public Key</Label>
                      <Input
                        id="publicKey"
                        value={emailConfig.publicKey}
                        onChange={handleConfigChange}
                        placeholder="Enter Public Key"
                        className="mt-1"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="text-xs mt-3">
                    <span className="text-primary font-bold">Tip:</span> These values are saved in your browser only. Be sure to fill them in before submitting the contact form!
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

