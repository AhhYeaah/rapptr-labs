import React, { ReactNode, useEffect, useRef } from 'react';

interface FadeInProps {
  delay?: number;
  duration?: number;
  children?: ReactNode[] | ReactNode;
}

export function FadeIn({ children, duration = 300, delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current!.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
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
    <div ref={ref} className={'opacity-0 '}>
      {children}
    </div>
  );
}
