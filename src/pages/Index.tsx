
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyMensCounselling from '@/components/WhyMensCounselling';
import Services from '@/components/Services';
import Therapist from '@/components/Therapist';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyMensCounselling />
      <Services />
      <Therapist />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <ContactForm />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
