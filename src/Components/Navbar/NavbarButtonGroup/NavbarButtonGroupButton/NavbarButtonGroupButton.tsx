import React, { ReactNode } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';

interface NavbarButtonGroupButtonProps {
  darkMode?: boolean;
  children: string;
}

export function NavbarButtonGroupButton({ darkMode, children }: NavbarButtonGroupButtonProps) {
  const navigate = useNavigate();

  return (
    <li key={`NavbarButtonGroupLink - ${children}`} className="ml-4">
      <button
        className={
          ' border rounded-md py-2 px-6 transition-transform ' +
          ' hover:scale-110 focus-visible:scale-110 ' +
          (darkMode ? ' border-white ' : ' border-black ')
        }
        onClick={() => {
          navigate('/' + children.replace(' ', '-').toLowerCase());
        }}
      >
        {children}
      </button>
    </li>
  );
}
