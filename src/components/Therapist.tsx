
import React from 'react';

const Therapist = () => {
  return (
    <section id="about" className="container-section bg-harbor-navy/10">
      <h2 className="section-title">Meet Your Therapist</h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div className="flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1470&auto=format&fit=crop" 
            alt="Dr. James Wilson, Therapist" 
            className="rounded-lg shadow-lg max-w-full h-auto object-cover max-h-96"
          />
        </div>
        
        <div>
          <h3 className="text-2xl font-serif font-bold text-harbor-navy mb-2">Dr. James Wilson</h3>
          <p className="text-harbor-teal font-medium mb-4">Ph.D. Clinical Psychology, Certified Men's Health Counselor</p>
          
          <div className="space-y-4 text-harbor-charcoal">
            <p>
              With over 15 years of experience helping men navigate life's challenges, 
              I've dedicated my practice to creating a space where men can find both 
              guidance and understanding without judgment.
            </p>
            
            <p>
              My approach combines evidence-based techniques with a deep appreciation 
              for the unique pressures men face in today's world. Whether you're dealing 
              with career stress, relationship difficulties, or major life transitions, 
              my goal is to help you build resilience while honoring your authentic self.
            </p>
            
            <p className="italic font-serif text-harbor-navy">
              "I believe courage isn't the absence of fear but the decision to move forward anyway. 
              Every man has the capacity for extraordinary growth when given the right tools and support."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Therapist;
