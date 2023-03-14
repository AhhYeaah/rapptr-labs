import React, { ReactNode } from 'react';
import { Footer } from '../../Components/Footer/Footer';
import { Navbar } from '../../Components/Navbar/Navbar';
import './SimplePage.css';

interface SimplePageProp {
  children: ReactNode;
  isNavBarDark?: boolean;
}

export function SimplePage({ children: page, isNavBarDark = false }: SimplePageProp) {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar darkMode={isNavBarDark}></Navbar>
      <main className="mainPageContainer flex grow items-stretch ">{page}</main>
      <Footer></Footer>
    </div>
  );
}
