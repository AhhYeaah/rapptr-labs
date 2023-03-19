import React from 'react';
import { Blur } from '../../../Components/Animations/Blur/Blur';
import { FadeIn } from '../../../Components/Animations/FadeIn/FadeIn';
import { SlideUp } from '../../../Components/Animations/SlideUp/SlideUp';
import { DarkButton } from '../../../Components/Button/DarkButton';

export function WorkPage() {
  return (
    <div className="flex-col">
      <div className="relative flex-center h-[85vh] bg-gradient-to-t from-[#121f2e] to-rapptr-black ">
        <div className="absolute bottom-0 top-0 opacity-30 snap-end">
          <SlideUp duration={1000} pixelsTop={500}>
            <FadeIn duration={1000}>
              <Blur blurInPixels={5} duration={800} delay={1500}>
                <img
                  className="w-[80wh] select-none"
                  draggable={false}
                  src="https://www.rapptrlabs.com/static/Frame1-5203f3e9d000eb2f056e6334699dd91e.png"
                  alt=""
                />
              </Blur>
            </FadeIn>
          </SlideUp>
        </div>
        <div>
          <FadeIn duration={1000} delay={1500}>
            <div>
              <div className={'flex-center text-center text-white w-full px-10'}>
                <div className="max-w-screen-xl ">
                  <div className="text-4xl lg:text-7xl font-extrabold w-auto block">
                    Bringing <span className="text-rapptr-blue">Digital Products</span> to
                    Life
                  </div>

                  <div className="text-xl lg:text-2xl w-auto mt-10 font-light">
                    From idealization to development, the Rapptr team has helped dozens of
                    clients build and launch custom mobile and web apps and premium
                    digital experiences. Our clients include companies of all sizes, from
                    high-growth startups to enterprise brands and everything in between.
                  </div>
                  <div>
                    <DarkButton className="mt-5">Take a look at our works</DarkButton>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="flex-center h-screen bg-[#121f2e] snap-end">
        {/* <Carrousel>
          <CarrouselImage></CarrouselImage>
          <CarrouselImage></CarrouselImage>
          <CarrouselImage></CarrouselImage>
          <CarrouselImage></CarrouselImage>
          <CarrouselImage></CarrouselImage>
          <CarrouselImage></CarrouselImage>
          <CarrouselImage></CarrouselImage>
          <CarrouselImage></CarrouselImage>
          <CarrouselImage></CarrouselImage>
          <CarrouselImage></CarrouselImage>
        </Carrousel> */}
      </div>
    </div>
  );
}
