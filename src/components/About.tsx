
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="grid grid-cols-1 gap-6 h-full">
            <Card className="overflow-hidden h-full">
              <div className="relative h-full">
                <img 
                  // src="/lovable-uploads/9f79f80b-73a9-48ba-9099-0e21de279558.png" 
                  src="/lovable-uploads/5eefefb3-e505-4927-83c7-f46d0a6bde3b.png"
                  alt="South Indian Vadai" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Authentic Recipes</h3>
                  <p className="text-white/90">Traditional South Indian recipes prepared with care</p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-center h-full">
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

          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="relative h-60">
                <img 
                  src="/lovable-uploads/bd9fa88e-756d-4b5d-91ce-a35fb7865968.png" 
                  alt="South Indian Dishes" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <h4 className="text-xl font-bold text-white">Fresh Ingredients</h4>
                </div>
              </div>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="relative h-60">
                <img 
                  src="/lovable-uploads/f53e50b7-b824-465a-87e3-b1122964c97f.png" 
                  alt="South Indian Dosa" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <h4 className="text-xl font-bold text-white">Homestyle Cooking</h4>
                </div>
              </div>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="relative h-60">
                <img 
                  src="/lovable-uploads/16f32c43-f5c0-47bb-b417-cb2308d551f0.png" 
                  alt="South Indian Idlis" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <h4 className="text-xl font-bold text-white">Traditional Flavors</h4>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
