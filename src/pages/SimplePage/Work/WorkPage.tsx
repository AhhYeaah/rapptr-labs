import React, { ReactNode } from 'react';
import { Carrousel } from './Carrousel/Carrousel';
import { CarrouselImage } from './Carrousel/CarrouselImage/CarrouselImage';

interface WorkPageProps {
  value?: string;
  children?: ReactNode[] | ReactNode;
}

export function WorkPage({ value }: WorkPageProps) {
  return (
    <div className="bg-black overflow-hidden">
      <Carrousel>
        <CarrouselImage></CarrouselImage>
        <CarrouselImage></CarrouselImage>
        <CarrouselImage></CarrouselImage>
        <CarrouselImage></CarrouselImage>
        <CarrouselImage></CarrouselImage>
        <CarrouselImage></CarrouselImage>
        <CarrouselImage></CarrouselImage>
        <CarrouselImage></CarrouselImage>
        <CarrouselImage></CarrouselImage>
      </Carrousel>
    </div>
  );
}
