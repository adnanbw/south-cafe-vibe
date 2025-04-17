
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TextSlider from '@/components/TextSlider';
import Menu from '@/components/Menu';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-podipoint-cream">
      <Navbar />
      <Hero />
      <About />
      <TextSlider />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
