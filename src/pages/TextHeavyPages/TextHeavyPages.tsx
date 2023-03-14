import React, { ReactNode } from 'react';
import { Footer } from '../../Components/Footer/Footer';
import { Navbar } from '../../Components/Navbar/Navbar';
import { PageTitle } from '../PageTitle/PageTitle';
import './TextHeavyPages.css';

interface TextHeavyPagesProps {
  children: ReactNode;
  title: string;
}

export default function TextHeavyPages({ title, children }: TextHeavyPagesProps) {
  document.title = 'Rapptr Labs - ' + title;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div>
      <Navbar />
      <main className="flex grow items-stretch">
        <div className="flex flex-col items-center w-full">
          <PageTitle>{title}</PageTitle>
          <div className="max-w-screen-lg mx-10 my-20 text-div">
            <div className="mb-12">
              <h1 className="styled-title">{title}</h1>
              <h2 className="text-center text-discreet">
                Last updated: March 13th, 2022
              </h2>
            </div>
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
