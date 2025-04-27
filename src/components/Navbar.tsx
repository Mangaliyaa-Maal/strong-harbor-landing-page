
import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-harbor-navy font-serif font-bold text-xl md:text-2xl">Strong Harbor</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#why" className="nav-link">Why Men's Counselling</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <Button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Book Consult
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-harbor-navy focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#why" className="nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Why Men's Counselling</a>
            <a href="#services" className="nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#about" className="nav-link py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#faq" className="nav-link py-2" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <Button className="btn-primary w-full" onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}>
              Book Consult
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
