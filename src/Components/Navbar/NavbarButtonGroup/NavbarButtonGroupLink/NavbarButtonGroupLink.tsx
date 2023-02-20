import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarButtonGroupLinkProps {
  children: string;
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function NavbarButtonGroupLink({ children }: NavbarButtonGroupLinkProps) {
  return (
    <li key={`NavbarButtonGroupLink - ${children}`} className="mx-4">
      <NavLink
        to={'/' + children.toLowerCase()}
        className={({ isActive }) => {
          return isActive
            ? 'text-[#3ec7f4]'
            : '' +
                ' hover:text-[#3ec7f4] active:text-white focus-visible:text-[#3ec7f4] text-b transition-all duration-150';
        }}
      >
        {capitalizeFirstLetter(children)}
      </NavLink>
    </li>
  );
}
