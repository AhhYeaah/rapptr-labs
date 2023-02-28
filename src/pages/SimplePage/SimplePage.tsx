import React, { ReactNode, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../Components/Footer/Footer';
import { Navbar } from '../../Components/Navbar/Navbar';

export function SimplePage() {
  //state lift
  const [isNavBarDark, changeIsNavbarDark] = useState(false);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar darkMode={isNavBarDark}></Navbar>
      <main className="grow flex items-stretch">
        <Outlet context={changeIsNavbarDark}></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}
