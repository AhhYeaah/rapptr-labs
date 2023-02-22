import React, { ReactNode } from 'react';
import { PageTitle } from '../PageTitle/PageTitle';
import './TextHeavyPages.css';

interface TextHeavyPagesProps {
  children: ReactNode;
  title: string;
}

export function TextHeavyPages({ title, children }: TextHeavyPagesProps) {
  document.title = 'Rapptr Labs - ' + title;

  return (
    <div className="flex items-center flex-col grow">
      <PageTitle>{title}</PageTitle>
      <div className="max-w-screen-xl mx-10 my-20 text-div">
        <div className="mb-12">
          <h1 className="styled-title">{title}</h1>
          <h2 className="text-center text-discreet">Last updated: March 13th, 2022</h2>
        </div>
        {children}
      </div>
    </div>
  );
}
