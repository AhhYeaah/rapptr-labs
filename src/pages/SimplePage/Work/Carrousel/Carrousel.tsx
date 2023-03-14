import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { CarrouselPositionPercentageContext } from './CarrouselPositionPercentageContext';

interface CarrouselProps {
  children?: ReactNode[] | ReactNode;
}

export function Carrousel({ children }: CarrouselProps) {
  const [scrollPercentage, changeScrollPercentage] = useState(50);
  const [isMouseDown, changeIsMouseDown] = useState(false);

  const mousePosition = useRef(0);
  const lastPercentage = useRef(0);

  const maxDragDistance = Math.round(document.body.clientWidth);

  useEffect(() => {
    const handleMouseRelease = () => {
      changeIsMouseDown(false);
      lastPercentage.current = scrollPercentage;
    };

    document.body.addEventListener('mouseup', handleMouseRelease);
    document.body.addEventListener('mouseleave', handleMouseRelease);
    changeScrollPercentage(0);

    //preventing memory leak.
    return () => {
      document.body.removeEventListener('mouseup', handleMouseRelease);
      document.body.removeEventListener('mouseleave', handleMouseRelease);
    };
  }, []);

  return (
    <div
      onMouseDown={(e) => {
        mousePosition.current = e.clientX;

        //save percentage
        lastPercentage.current = scrollPercentage;
        changeIsMouseDown(true);
      }}
      onMouseMove={(e) => {
        if (isMouseDown) {
          const howManyPixelsMoved = mousePosition.current - e.clientX;

          const percentageDraggedRelativeToMaxDrag = Math.round(
            (howManyPixelsMoved / maxDragDistance) * 100
          );

          const newDragPercentage =
            percentageDraggedRelativeToMaxDrag + lastPercentage.current;

          const isAValidPercentage = newDragPercentage <= 100 && newDragPercentage >= 0;
          if (isAValidPercentage) {
            changeScrollPercentage(newDragPercentage);
          }
        }
      }}
      className="w-screen h-[50vh]"
    >
      <div
        draggable={false}
        className={
          'relative left-[50vw] h-full inline-flex gap-5 transition-transform duration-[1200ms] ease-out'
        }
        style={{ transform: 'translateX(' + -scrollPercentage + '%)' }}
      >
        <CarrouselPositionPercentageContext.Provider value={scrollPercentage}>
          {children}
        </CarrouselPositionPercentageContext.Provider>
      </div>
    </div>
  );
}
