
// import React from 'react';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext,
// } from "@/components/ui/carousel";
// import { useEffect } from "react";
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';

// const TextSlider = () => {
//   const texts = [
//     "ಪೋಡಿ ಪಾಯಿಂಟ್",
//     "ನಿಜವಾದ ದಕ್ಷಿಣ ಭಾರತೀಯ",
//     "ದಕ್ಷಿಣ ಭಾರತೀಯ" 
//   ];

//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { 
//       loop: true,
//       align: "center",
//       duration: 40,
//     },
//     [Autoplay({ delay: 3000, stopOnInteraction: false })]
//   );

//   return (
//     <section className="py-6 bg-podipoint-green">
//       <Carousel 
//         opts={{
//           align: "center",
//           loop: true,
//         }}
//         className="w-full max-w-4xl mx-auto relative"
//       >
//         <CarouselContent ref={emblaRef}>
//           {texts.map((text, index) => (
//             <CarouselItem key={index} className="flex items-center justify-center">
//               <div className="text-center">
//                 <h2 
//                   className="text-3xl md:text-5xl font-bold text-white py-4" 
//                   style={{ fontFamily: 'Noto Sans Kannada, sans-serif' }}
//                 >
//                   {text}
//                 </h2>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious className="text-white border-white hover:bg-white/20" />
//         <CarouselNext className="text-white border-white hover:bg-white/20" />
//       </Carousel>
//     </section>
//   );
// };

// export default TextSlider;
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const TextSlider = () => {
  const texts = [
    "ಪೋಡಿ ಪಾಯಿಂಟ್",
    "ನಿಜವಾದ ದಕ್ಷಿಣ ಭಾರತೀಯ",
    "ದಕ್ಷಿಣ ಭಾರತೀಯ" 
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "center",
      duration: 40,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section className="py-6 bg-podipoint-green">
      <Carousel 
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto relative"
      >
        <CarouselContent ref={emblaRef}>
          {texts.map((text, index) => (
            <CarouselItem key={index} className="flex items-center justify-center">
              <div className="text-center">
                <h2 
                  className="text-3xl md:text-5xl font-bold text-white py-4" 
                  style={{ fontFamily: 'Noto Sans Kannada, sans-serif' }}
                >
                  {text}
                </h2>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-green-600 border-green-600 bg-white hover:bg-green-600 hover:text-white" />
        <CarouselNext className="text-green-600 border-green-600 bg-white hover:bg-green-600 hover:text-white" />
      </Carousel>
    </section>
  );
};

export default TextSlider;