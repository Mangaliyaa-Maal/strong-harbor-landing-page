
import React from 'react';
import { UserRound, UsersRound, Video, Clock } from "lucide-react";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  poetic, 
  description 
}: { 
  icon: React.ElementType, 
  title: string, 
  poetic: string, 
  description: string 
}) => {
  return (
    <div className="service-card">
      <div className="w-12 h-12 rounded-full bg-harbor-navy/10 flex items-center justify-center mb-4">
        <Icon size={24} className="text-harbor-navy" />
      </div>
      <h3 className="text-xl font-serif font-bold text-harbor-navy mb-2">{title}</h3>
      <p className="italic text-harbor-teal mb-4 font-serif">{poetic}</p>
      <p className="text-harbor-charcoal mt-auto">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: UserRound,
      title: "One-on-One Coaching",
      poetic: "Forge Resilience in the Fires of Change",
      description: "Personalized sessions focused on your specific challenges. Develop tailored strategies, gain insight, and build the mental framework to navigate life's complexity."
    },
    {
      icon: UsersRound,
      title: "Group Workshops & Retreats",
      poetic: "Strength Found in Shared Stories",
      description: "Connect with fellow men in guided group experiences. Learn from each other's journeys while developing skills in communication, resilience, and self-awareness."
    },
    {
      icon: Video,
      title: "Online Video Sessions",
      poetic: "Distance Yields to Determined Growth",
      description: "Access the same quality counseling from wherever you are. Our secure platform ensures confidentiality and connection even when life keeps you on the move."
    },
    {
      icon: Clock,
      title: "Emergency Check-Ins",
      poetic: "In Storms, An Anchor Holds Fast",
      description: "When challenges intensify, access priority support. Brief sessions designed to stabilize and guide you through immediate difficulties with clarity."
    }
  ];

  return (
    <section id="services" className="container-section">
      <h2 className="section-title">Services Tailored for Your Journey</h2>
      <p className="section-subtitle">
        Every man's path is unique. Our services adapt to meet you exactly where you are, 
        providing the right support at the right time.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            poetic={service.poetic}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
