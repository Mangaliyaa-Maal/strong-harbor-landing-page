
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import WhyMensCounselling from '@/components/WhyMensCounselling';
import Services from '@/components/Services';
import Therapist from '@/components/Therapist';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ContactForm />
      <WhyMensCounselling />
      <Services />
      <Therapist />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
