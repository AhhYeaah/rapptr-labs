import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar/Navbar';

interface PageProps {
  value?: string;
  children?: ReactNode[] | ReactNode;
}

export function Page({ value = 'Hello world' }: PageProps) {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}
