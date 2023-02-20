import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar/Navbar';

export function IndexPage() {
  return (
    <div className="h-[3000px] bg-red-200">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}
