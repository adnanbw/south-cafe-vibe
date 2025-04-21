
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-podipoint-green text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-white p-2 rounded-full mb-4">
              <img 
                src="/lovable-uploads/7aa2f8d8-b1ff-4e65-a91c-95aadea12ffa.png" 
                alt="Podi Point Logo" 
                className="h-16 w-16 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Podi Point</h3>
            <p className="text-white/80 text-sm">
              Authentic South Indian Cuisine
            </p>
          </div>
          
          {/* Quick links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-podipoint-lightorange transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-podipoint-lightorange transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-podipoint-lightorange transition-colors">Our Menu</a></li>
              <li><a href="#contact" className="hover:text-podipoint-lightorange transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">Podi Point, Nanakheda Circle</p>
            <p className="mb-2">Ujjain 456010</p>
            <p className="mb-4">+91 91114 15554</p>
            
            <div className="flex justify-center md:justify-end space-x-4">
              {/* <a href="#" className="hover:text-podipoint-orange transition-colors">
                <Facebook size={20} />
              </a> */}
              <a href="https://www.instagram.com/podipoint/" className="hover:text-podipoint-orange transition-colors">
                <Instagram size={20} />
              </a>
              {/* <a href="#" className="hover:text-podipoint-orange transition-colors">
                <Twitter size={20} />
              </a> */}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; {currentYear} Podi Point. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
