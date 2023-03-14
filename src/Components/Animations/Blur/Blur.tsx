import React, { ReactNode, useEffect, useRef } from 'react';

interface BlurProps {
  delay?: number;
  duration?: number;
  blurInPixels: number;
  children?: ReactNode[] | ReactNode;
}

export function Blur({
  children,
  blurInPixels = 2,
  duration = 300,
  delay = 0,
}: BlurProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current!.animate(
      [
        {
          filter: `blur(0px)`,
        },
        {
          filter: `blur(${blurInPixels}px)`,
        },
      ],
      {
        duration: duration,
        delay: delay,
        fill: 'forwards',
        easing: 'ease-out',
      }
    );
  }, []);
  return (
    <div ref={ref} className={'blur-none'}>
      {children}
    </div>
  );
}
