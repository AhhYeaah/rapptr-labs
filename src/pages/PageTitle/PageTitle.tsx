import React from 'react';

interface PageTitleProps {
  children: string;
}

export function PageTitle({ children }: PageTitleProps) {
  return (
    <div className="flex-center text-center text-white text-4xl lg:text-6xl font-extrabold py-[10vh]  w-full bg-[#0b131c]">
      {children}
    </div>
  );
}
