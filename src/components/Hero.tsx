
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6 z-10">
          <div className="decorative-dots">
            <div className="dot orange"></div>
            <div className="dot cream"></div>
            <div className="dot green"></div>
            
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-podipoint-green leading-tight">
            Experience True <br />
            <span className="text-podipoint-orange">South Indian</span> <br />
            Flavors in Ujjain
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-lg">
            Podi Point brings authentic South Indian cuisine with a 
            perfect blend of traditional spices and flavors to create a 
            memorable dining experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#menu" 
              className="px-8 py-3 bg-podipoint-green text-white rounded-full font-medium hover:bg-podipoint-green/90 transition-colors"
            >
              Explore Menu
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-podipoint-green rounded-full font-medium hover:bg-podipoint-green/10 transition-colors"
            >
              Find Us
            </a>
          </div>
          <div className="decorative-dots mt-8">
            <div className="dot orange"></div>
            <div className="dot cream"></div>
            <div className="dot green"></div>
           
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center items-center z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-podipoint-green/10 rounded-full blur-3xl transform scale-75 opacity-50"></div>
            <div className="relative bg-white p-2 rounded-full overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/7aa2f8d8-b1ff-4e65-a91c-95aadea12ffa.png" 
                alt="Podi Point Logo" 
                className="w-64 h-64 md:w-80 md:h-80 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/3 right-0 w-1/3 h-2/3 bg-podipoint-lightgreen/10 rounded-full blur-3xl -z-10 transform translate-x-1/2"></div>
      <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-podipoint-orange/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2"></div>
    </section>
  );
};

export default Hero;
