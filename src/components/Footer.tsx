
// import React from 'react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
  
//   return (
//     <footer className="bg-podipoint-green text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start">
//             <img 
//               src="/lovable-uploads/7aa2f8d8-b1ff-4e65-a91c-95aadea12ffa.png" 
//               alt="Podi Point Logo" 
//               className="h-16 bg-white p-1 rounded-full mb-4"
//             />
//             <div className="flex items-center">
//               <img 
//                 src="/lovable-uploads/377fc544-f639-40da-904f-9181718ab326.png" 
//                 alt="Podi Point with Tagline" 
//                 className="h-8 bg-white p-1 rounded-lg"
//               />
//             </div>
//           </div>
          
//           <div className="text-center md:text-right">
//             <p>&copy; {currentYear} Podi Point. All rights reserved.</p>
//             <p className="text-sm mt-2 text-white/70">
//               Experience authentic South Indian cuisine in Ujjain
//             </p>
//             <div className="mt-4 flex justify-center md:justify-end space-x-2">
//               <span className="text-podipoint-orange">•</span>
//               <span className="text-podipoint-lightorange">•</span>
//               <span className="text-podipoint-lightgreen">•</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
const Footer = () => {
  return (
    <footer className="bg-[#0A5638] py-12 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          <img
            src="/lovable-uploads/b6ba81ac-c1ce-4311-a3db-3c94dd5103d6.png"
            alt="Podi Point Logo"
            className="h-16 w-auto mb-6"
          />
          
          <div className="text-center max-w-xl mx-auto mb-8">
            <p className="text-white/80 mb-4">
              Experience the authentic flavors of South India at Podi Point. We bring you the traditional recipes made with love and care.
            </p>
            
            <p className="text-white/80">
              © {new Date().getFullYear()} Podi Point. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#about" className="text-white/80 hover:text-white transition-colors">
              About
            </a>
            <span className="text-white/50">•</span>
            <a href="#menu" className="text-white/80 hover:text-white transition-colors">
              Menu
            </a>
            <span className="text-white/50">•</span>
            <a href="#gallery" className="text-white/80 hover:text-white transition-colors">
              Gallery
            </a>
            <span className="text-white/50">•</span>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;