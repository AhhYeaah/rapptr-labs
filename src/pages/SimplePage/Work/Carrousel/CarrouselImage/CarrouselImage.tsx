import React, { useContext, useEffect, useState } from 'react';
import { CarrouselPositionPercentageContext } from '../CarrouselPositionPercentageContext';

import './CarrouselImage.css';

interface CarrouselImageProps {
  imgUrl: string;
  alt?: string;
}

export function CarrouselImage({ alt }: CarrouselImageProps) {
  const [isOpen, changeOpen] = useState(false);

  const [randomNum] = useState(Math.floor(Math.random() * 40));
  const positionPercentage = useContext(CarrouselPositionPercentageContext);

  useEffect(() => {
    changeOpen(false);
  }, [positionPercentage]);

  return (
    <div
      className={
        'carrousel-image block bg-black overflow-hidden select-none transition-all duration-500 ' +
        (isOpen ? ' w-[33vw]' : ' w-[17vw]')
      }
      aria-expanded={isOpen}
      onClick={() => changeOpen(!isOpen)}
    >
      <img
        className="object-cover h-full transition-all duration-[1200ms] ease-out "
        style={{ objectPosition: `${positionPercentage}%` }}
        draggable={false}
        src={`https://picsum.photos/seed/${randomNum}/1080/700`}
        alt={alt}
      />
    </div>
  );
}
