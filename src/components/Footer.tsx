
import React from 'react';
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-harbor-navy text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-serif font-bold">Strong Harbor</h3>
            <p className="text-harbor-ivory/70 mt-1">Men's Counselling Services</p>
          </div>
          
          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 md:mb-0">
            <a href="#" className="text-harbor-ivory hover:text-harbor-teal transition-colors">About</a>
            <a href="#services" className="text-harbor-ivory hover:text-harbor-teal transition-colors">Services</a>
            <a href="#faq" className="text-harbor-ivory hover:text-harbor-teal transition-colors">FAQ</a>
            <a href="#" className="text-harbor-ivory hover:text-harbor-teal transition-colors">Privacy Policy</a>
          </nav>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-harbor-teal transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-harbor-teal transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-harbor-ivory/50 text-sm">
            &copy; {new Date().getFullYear()} Strong Harbor Men's Counselling. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
