
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border/40 sticky top-0 z-40 flex h-16 items-center">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-primary font-bold text-xl">BIET</span>
            <span className="font-bold text-lg">Resources Hub</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/resources" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Resources
          </Link>
          <Link to="/about" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            About
          </Link>
          <Link to="/contribution" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Contribution
          </Link>
          <Link to="/contact" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Contact
          </Link>
          <Button asChild size="sm" variant="default">
            <Link to="/resources">Explore Resources</Link>
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
