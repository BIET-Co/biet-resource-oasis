
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/30 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <span className="text-primary">BIET</span>&nbsp;Resources Hub
            </h3>
            <p className="text-foreground/70 mb-4 max-w-md">
              A centralized curation of academic resources for students of Bapuji Institute of Engineering and Technology. Making learning accessible for all.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#resources" className="text-foreground/70 hover:text-primary transition-colors">Resources</a>
              </li>
              <li>
                <a href="#testimonials" className="text-foreground/70 hover:text-primary transition-colors">Testimonials</a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-base font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#resources" className="text-foreground/70 hover:text-primary transition-colors">Module-Wise Notes</a>
              </li>
              <li>
                <a href="#resources" className="text-foreground/70 hover:text-primary transition-colors">Question Banks</a>
              </li>
              <li>
                <a href="#resources" className="text-foreground/70 hover:text-primary transition-colors">CIE Question Papers</a>
              </li>
              <li>
                <a href="#resources" className="text-foreground/70 hover:text-primary transition-colors">SEE Question Papers</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} BIET Resources Hub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
