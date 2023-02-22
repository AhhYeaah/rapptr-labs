import React, { ReactNode } from 'react';

interface PageTitleProps {
  children: string;
}

export function PageTitle({ children }: PageTitleProps) {
  return (
    <div className="flex-center text-center text-white text-6xl font-extrabold h-[250px] w-full bg-[#0b131c]">
      {children}
    </div>
  );
}
