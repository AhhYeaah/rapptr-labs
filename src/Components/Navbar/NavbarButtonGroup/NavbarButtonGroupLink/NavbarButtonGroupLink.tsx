import React from 'react';
import { NavLink } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../../../utils/Text';

interface NavbarButtonGroupLinkProps {
  to?: string;
  colorIfActive?: boolean;
  hasMargin?: boolean;
  children: string;
}

export function NavbarButtonGroupLink({
  children,
  to,
  colorIfActive,
  hasMargin = true,
}: NavbarButtonGroupLinkProps) {
  return (
    <li
      key={`NavbarButtonGroupLink - ${children}`}
      className={hasMargin ? 'mx-4' : ''}
    >
      <NavLink
        to={to ?? '/' + children.toLowerCase()}
        className={({ isActive }) => {
          return isActive && colorIfActive
            ? 'text-rapptr-blue'
            : '' +
                ' hover:text-rapptr-blue active:text-white focus-visible:text-rapptr-blue text-b transition-all duration-150';
        }}
      >
        {capitalizeFirstLetter(children)}
      </NavLink>
    </li>
  );
}
