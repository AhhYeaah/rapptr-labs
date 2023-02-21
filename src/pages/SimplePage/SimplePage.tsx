import React, { ReactNode, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../Components/Footer/Footer';
import { Navbar } from '../../Components/Navbar/Navbar';

export function SimplePage() {
  //state lift
  const [isNavBarDark, changeIsNavbarDark] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar darkMode={isNavBarDark}></Navbar>
      <Outlet context={changeIsNavbarDark}></Outlet>
      <Footer></Footer>
    </div>
  );
}
