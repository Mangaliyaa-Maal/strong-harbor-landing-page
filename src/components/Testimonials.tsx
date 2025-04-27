
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Working with Dr. Wilson helped me break through barriers I'd built over decades. I'm now more present with my family, more effective at work, and finally feel like I understand my own emotions.",
    author: "Michael T., 42"
  },
  {
    quote: "After my divorce, I was completely lost. The group sessions at Strong Harbor gave me both practical tools and a community of men who understood. I'm rebuilding with confidence now.",
    author: "Robert L., 38"
  },
  {
    quote: "I was skeptical about therapy as a business leader, thinking I should handle everything myself. Six months later, I can say it's the best investment I've made—in myself, my relationships, and ultimately, my company.",
    author: "David M., 51"
  },
  {
    quote: "The emergency check-ins were lifesavers during my career transition. Having someone to help me process in real-time made all the difference in maintaining my mental health.",
    author: "Jason K., 35"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container-section">
      <h2 className="section-title">Voices of Transformation</h2>
      <p className="section-subtitle">
        Stories from men who've navigated their challenges with Strong Harbor's guidance.
      </p>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-card transition-all duration-500 ${
                index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 absolute top-0 translate-y-4'
              }`}
              style={{ zIndex: index === activeIndex ? 10 : 0 }}
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-harbor-navy opacity-40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                </svg>
              </div>
              <p className="text-lg font-serif italic mb-6 text-harbor-charcoal">"{testimonial.quote}"</p>
              <p className="text-right font-medium text-harbor-navy">{testimonial.author}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-harbor-navy scale-125' : 'bg-harbor-navy/30'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
