
import React from 'react';
import { Shield, FileText, Users } from "lucide-react";

const WhyMensCounselling = () => {
  return (
    <section id="why" className="container-section bg-harbor-ivory/30">
      <h2 className="section-title">Why Men's Counselling?</h2>
      <div className="max-w-3xl mx-auto mb-16">
        <p className="text-center text-harbor-charcoal leading-relaxed">
          Men face unique challenges in today's world—societal expectations, emotional barriers, 
          and a hesitancy to seek help. Traditional counselling often overlooks these distinctions. 
          At Strong Harbor, we understand that men navigate waters differently, requiring approaches 
          that honor your experiences while building resilience, purpose, and connection. Our methods 
          are tailored specifically for the journey men undertake in healing and growth.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Confidentiality */}
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-harbor-navy/10 flex items-center justify-center mb-4">
            <Shield size={32} className="text-harbor-navy" />
          </div>
          <h3 className="text-xl font-serif font-bold text-harbor-navy mb-3">Confidentiality</h3>
          <p className="text-harbor-charcoal">
            Your story remains yours. We maintain the highest standards of privacy and discretion, 
            creating a secure harbor where vulnerability becomes strength.
          </p>
        </div>
        
        {/* Evidence-Based Techniques */}
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-harbor-navy/10 flex items-center justify-center mb-4">
            <FileText size={32} className="text-harbor-navy" />
          </div>
          <h3 className="text-xl font-serif font-bold text-harbor-navy mb-3">Evidence‐Based Techniques</h3>
          <p className="text-harbor-charcoal">
            Our approaches combine cutting-edge research with time-tested methods, 
            delivering actionable strategies that create measurable progress in your life.
          </p>
        </div>
        
        {/* Brotherhood of Support */}
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-harbor-navy/10 flex items-center justify-center mb-4">
            <Users size={32} className="text-harbor-navy" />
          </div>
          <h3 className="text-xl font-serif font-bold text-harbor-navy mb-3">Brotherhood of Support</h3>
          <p className="text-harbor-charcoal">
            Connect with others on similar journeys. Shared challenges create understanding; 
            shared victories create lasting bonds that strengthen your personal growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyMensCounselling;
