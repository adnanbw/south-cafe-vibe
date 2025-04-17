
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-podipoint-green/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="section-heading text-podipoint-green">About Podi Point</h2>
          <div className="decorative-dots">
            <div className="dot orange"></div>
            <div className="dot cream"></div>
            <div className="dot green"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-3xl shadow-lg p-8 order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-podipoint-green">Our Story</h3>
            <p className="text-gray-700 mb-4">
              Podi Point was born from a passion to bring authentic South Indian cuisine. 
              Our journey began with the simple idea that great food is about more than just taste—it's 
              about tradition, culture, and community.
            </p>
            <p className="text-gray-700 mb-4">
              Founded by a team of culinary enthusiasts with roots in South India, we've created a menu 
              that celebrates the rich diversity of South Indian cuisine, from crispy dosas to fluffy idlis, 
              all prepared with authentic recipes and techniques.
            </p>
            <p className="text-gray-700">
              At Podi Point, we're committed to using fresh, high-quality ingredients and traditional 
              spice blends to create dishes that transport you straight to the vibrant streets of South India.
            </p>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-podipoint-orange/20 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                <span className="text-4xl mb-2">🌱</span>
                <h4 className="font-bold text-podipoint-green">Fresh Ingredients</h4>
              </div>
              <div className="aspect-square bg-podipoint-lightgreen/20 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                <span className="text-4xl mb-2">👨‍🍳</span>
                <h4 className="font-bold text-podipoint-green">Expert Chefs</h4>
              </div>
              <div className="aspect-square bg-podipoint-lightorange/30 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                <span className="text-4xl mb-2">🌶️</span>
                <h4 className="font-bold text-podipoint-green">Authentic Spices</h4>
              </div>
              <div className="aspect-square bg-podipoint-green/20 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                <span className="text-4xl mb-2">💖</span>
                <h4 className="font-bold text-podipoint-green">Made with Love</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
