
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  // Simple parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const heroImage = document.querySelector('.hero-image') as HTMLElement;
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrollValue * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNextSection = () => {
    document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0 bg-harbor-navy/90">
        <div 
          className="hero-image absolute inset-0 opacity-60 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1470&auto=format&fit=crop')", 
            backgroundPosition: 'center 25%'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10 mt-16">
        <div className="max-w-3xl mx-auto text-center text-white animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            You Don't Have to Carry It All Alone
          </h1>
          <p className="text-xl md:text-2xl font-serif mb-10 text-harbor-ivory/90">
            Guiding men toward strength of heart, clarity of mind, and harmony in life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-harbor-teal hover:bg-harbor-teal/90 text-white font-medium py-6 px-8 rounded-md text-lg"
              onClick={scrollToContact}
            >
              Book Your Free Consult
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/10 font-medium py-6 px-8 rounded-md text-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-75 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center"
      >
        <span className="text-sm mb-2">Learn More</span>
        <ArrowDown size={24} className="animate-wave" />
      </button>
    </section>
  );
};

export default Hero;
