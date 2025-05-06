
import React from 'react';

const Therapist = () => {
  return (
    <section id="about" className="container-section bg-harbor-navy/10">
      <h2 className="section-title">What We Do and What We Aim</h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div className="flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1470&auto=format&fit=crop" 
            alt="Dr. James Wilson, Therapist" 
            className="rounded-lg shadow-lg max-w-full h-auto object-cover max-h-96"
          />
        </div>
        
        <div>
          <h3 className="text-2xl font-serif font-bold text-harbor-navy mb-2">Our Mission</h3>
          <p className="text-harbor-teal font-medium mb-4">Providing comprehensive support and guidance for men's mental well-being</p>
          
          <div className="space-y-4 text-harbor-charcoal">
            <p>
              We are dedicated to creating a safe and understanding space where men can explore their challenges,
              find their inner strength, and develop the tools they need for lasting emotional wellness.
            </p>
            
            <p>
              Our approach combines evidence-based techniques with compassionate support
              to help men navigate life's complexities with confidence and clarity.
              We aim to break down barriers to seeking help and normalize mental health care for men.
            </p>
            
            <p className="italic font-serif text-harbor-navy">
              "We believe every man deserves the opportunity to live authentically and purposefully,
              with strong connections, clear direction, and inner peace that comes from addressing
              rather than suppressing emotional needs."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Therapist;
