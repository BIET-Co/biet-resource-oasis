
import React from "react";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border/40 sticky top-0 z-40 flex h-16 items-center">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <span className="text-primary font-bold text-xl">BIET</span>
            <span className="font-bold text-lg">Resources Hub</span>
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#resources" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Resources
          </a>
          <a href="#about" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            About
          </a>
          <a href="#testimonials" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Testimonials
          </a>
          <Button asChild size="sm" variant="default">
            <a href="#resources">Explore Resources</a>
          </Button>
        </nav>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
