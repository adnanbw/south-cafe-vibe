
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
            <span className="text-podipoint-orange">South Indian Flavors</span> <br />
            Now in Ujjain
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
          <div className="food-collage-container relative w-full max-w-lg">
            {/* Main dish - large masala dosa */}
            <div className="relative bg-white p-3 rounded-2xl shadow-xl">
              <img 
                src="/lovable-uploads/5eefefb3-e505-4927-83c7-f46d0a6bde3b.png" 
                alt="South Indian Dosa" 
                className="w-full h-auto rounded-xl object-cover"
              />
              
              {/* Kannada text overlay */}
              <div className="absolute top-6 right-6 bg-podipoint-green/90 text-white px-5 py-3 rounded-lg rotate-6 shadow-lg">
                <p className="text-xl font-bold">ದಕ್ಷಿಣ ಭಾರತೀಯ</p>
                <p className="text-sm">South Indian Delight</p>
              </div>
            </div>
            
            {/* Side dishes */}
            <div className="absolute -bottom-8 -right-8 w-52 h-52">
              <img 
                src="/lovable-uploads/16f32c43-f5c0-47bb-b417-cb2308d551f0.png" 
                alt="South Indian Idlis" 
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
            
            <div className="absolute -top-6 -left-6 w-40 h-40">
              <img 
                src="/lovable-uploads/f53e50b7-b824-465a-87e3-b1122964c97f.png" 
                alt="South Indian Dosa with Chutneys" 
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
            
            <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 w-36 h-36">
              <div className="bg-podipoint-orange/90 w-full h-full rounded-full flex items-center justify-center p-3 shadow-lg">
                <p className="text-white font-bold text-center text-lg">Authentic Taste</p>
              </div>
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
