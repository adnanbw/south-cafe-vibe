
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-podipoint-cream/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/7aa2f8d8-b1ff-4e65-a91c-95aadea12ffa.png" 
            alt="Podi Point Logo" 
            className="h-14 md:h-16"
          />
          <span className="text-xl md:text-2xl font-bold text-podipoint-green">Podi Point</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="font-medium hover:text-podipoint-orange transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="font-medium hover:text-podipoint-orange transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('menu')} className="font-medium hover:text-podipoint-orange transition-colors">
            Menu
          </button>
          <button onClick={() => scrollToSection('contact')} className="font-medium hover:text-podipoint-orange transition-colors">
            Contact
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-podipoint-green p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-podipoint-cream absolute top-full left-0 right-0 shadow-md">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="py-2 font-medium hover:text-podipoint-orange transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="py-2 font-medium hover:text-podipoint-orange transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('menu')} className="py-2 font-medium hover:text-podipoint-orange transition-colors">
              Menu
            </button>
            <button onClick={() => scrollToSection('contact')} className="py-2 font-medium hover:text-podipoint-orange transition-colors">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
