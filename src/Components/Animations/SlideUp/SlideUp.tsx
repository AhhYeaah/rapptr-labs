import React, { ReactNode, useEffect, useRef } from 'react';

interface SildeUpFadeInProps {
  value?: string;
  pixelsTop?: number;
  delay?: number;
  duration?: number;
  children?: ReactNode[] | ReactNode;
}

export function SlideUp({
  children,
  pixelsTop = 100,
  duration = 300,
  delay = 0,
}: SildeUpFadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current!.animate(
      [
        {
          top: `${pixelsTop}px`,
        },
        {
          top: 0,
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
    <div ref={ref} className={'	relative'}>
      {children}
    </div>
  );
}
