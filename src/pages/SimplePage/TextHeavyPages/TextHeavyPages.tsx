import React, { ReactNode } from 'react';
import { useOutletContext } from 'react-router-dom';
import './TextHeavyPages.css';

interface TextHeavyPagesProps {
  children: ReactNode;
  title: string;
}

export function TextHeavyPages({ title, children }: TextHeavyPagesProps) {
  const changeIsNavbarDark = useOutletContext<(value: boolean) => void>();
  document.title = 'Rapptr Labs - ' + title;

  return (
    <div className="flex items-center flex-col grow">
      <div className="flex-center text-white text-[60px] font-bold h-[250px] w-full bg-[#0b131c]">{title}</div>
      <div className="max-w-screen-xl m-10 text-div">
        <div>
          <h1 className="styled-title">{title}</h1>
          <h2 className="text-center text-[#a7a9ac]">Last updated: March 13th, 2022</h2>
        </div>
        {children}
      </div>
    </div>
  );
}
