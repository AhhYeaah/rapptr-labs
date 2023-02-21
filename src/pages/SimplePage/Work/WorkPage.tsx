import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../../Components/Navbar/Navbar';

interface WorkPageProps {
  value?: string;
  children?: ReactNode[] | ReactNode;
}

export function WorkPage({ value }: WorkPageProps) {
  return <div className="h-[3000px] bg-slate-200"></div>;
}
