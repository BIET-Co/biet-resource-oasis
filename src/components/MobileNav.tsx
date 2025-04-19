
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80%] sm:w-[385px]">
        <SheetHeader>
          <SheetTitle className="flex items-center">
            <span className="text-primary font-bold text-xl">BIET</span>
            <span className="font-bold text-lg"> Resources Hub</span>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6 py-8">
          <a 
            href="#resources" 
            className="text-foreground/80 hover:text-foreground transition-colors text-lg flex items-center gap-2 border-b border-border/10 pb-3"
            onClick={() => document.querySelector('vaul-drawer')?.dispatchEvent(new CustomEvent('vaul:close'))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
            </svg>
            Resources
          </a>
          
          <a 
            href="#about" 
            className="text-foreground/80 hover:text-foreground transition-colors text-lg flex items-center gap-2 border-b border-border/10 pb-3"
            onClick={() => document.querySelector('vaul-drawer')?.dispatchEvent(new CustomEvent('vaul:close'))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
            About
          </a>
          
          <a 
            href="#testimonials" 
            className="text-foreground/80 hover:text-foreground transition-colors text-lg flex items-center gap-2 border-b border-border/10 pb-3"
            onClick={() => document.querySelector('vaul-drawer')?.dispatchEvent(new CustomEvent('vaul:close'))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M17 6.1H3"></path>
              <path d="M21 12.1H3"></path>
              <path d="M15.1 18H3"></path>
            </svg>
            Testimonials
          </a>
          
          <div className="mt-6">
            <Button asChild size="lg" className="w-full" variant="default">
              <a 
                href="#resources"
                onClick={() => document.querySelector('vaul-drawer')?.dispatchEvent(new CustomEvent('vaul:close'))}
              >
                Explore Resources
              </a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
