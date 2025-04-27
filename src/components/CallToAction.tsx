
import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-harbor-navy/80 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop')", 
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
          Your strength deserves a harbor—let's build it together.
        </h2>
        <p className="text-xl text-harbor-ivory/90 mb-8 max-w-2xl mx-auto">
          Every journey begins with a single step. Reach out today and discover how 
          Strong Harbor can help you navigate life's challenges with confidence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-harbor-teal hover:bg-harbor-teal/90 text-white font-medium py-6 px-8 rounded-md text-lg"
          >
            Book Your Free Consult
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToContact}
            className="bg-transparent border-white text-white hover:bg-white/10 font-medium py-6 px-8 rounded-md text-lg"
          >
            Send a Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
