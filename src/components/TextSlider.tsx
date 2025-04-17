
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const TextSlider = () => {
  const texts = [
    "ಪೋಡಿ ಪಾಯಿಂಟ್",
    "ನಿಜವಾದ ದಕ್ಷಿಣ ಭಾರತೀಯ"
  ];

  return (
    <section className="py-12 bg-podipoint-cream">
      <Carousel
        opts={{
          align: "center",
          loop: true,
          duration: 40,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {texts.map((text, index) => (
            <CarouselItem key={index} className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-podipoint-green py-8" style={{ fontFamily: 'Noto Sans Kannada, sans-serif' }}>
                  {text}
                </h2>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default TextSlider;
