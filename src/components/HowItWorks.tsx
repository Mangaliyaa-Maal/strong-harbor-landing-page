
import React from 'react';

const steps = [
  {
    number: 1,
    title: "Discovery Call",
    description: "A free 20-minute conversation to understand your challenges and goals. We'll determine if we're the right fit for your journey."
  },
  {
    number: 2,
    title: "Personalized Plan",
    description: "Together, we'll develop a tailored approach that addresses your specific needs, drawing from evidence-based techniques."
  },
  {
    number: 3,
    title: "Weekly Sessions",
    description: "Regular one-on-one or group sessions that build skills, insight, and momentum toward your goals."
  },
  {
    number: 4,
    title: "Ongoing Support",
    description: "Beyond scheduled sessions, access resources and check-ins designed to reinforce progress and navigate challenges."
  }
];

const HowItWorks = () => {
  return (
    <section id="process" className="container-section bg-harbor-ivory/30">
      <h2 className="section-title">How It Works</h2>
      <p className="section-subtitle">
        A straightforward path to transformation, designed with clarity and purpose.
      </p>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Step connector line */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-1 bg-harbor-navy/20 -translate-x-1/2 z-0"></div>
          
          {/* Steps */}
          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                {/* Step Number */}
                <div className="flex-none">
                  <div className="w-16 h-16 rounded-full bg-harbor-navy flex items-center justify-center text-white font-bold text-xl shadow-md">
                    {step.number}
                  </div>
                </div>
                
                {/* Step Content */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-harbor-light flex-grow">
                  <h3 className="text-xl font-serif font-bold text-harbor-navy mb-2">{step.title}</h3>
                  <p className="text-harbor-charcoal">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
