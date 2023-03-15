import React, { useContext } from 'react';
import { NavLink as LinkNav } from 'react-router-dom';
import { NavLinkHighlightingContext } from '../NavLinkHighlightingContext';
import { capitalizeFirstLetter } from './../../../../utils/Text';

interface NavLinkProps {
  to?: string;
  children: string;
}

function getLinkByContent(content: string) {
  return '/' + content.toLowerCase();
}

export function NavLink({ children, to = getLinkByContent(children) }: NavLinkProps) {
  const highlightWhenActive = useContext(NavLinkHighlightingContext);

  return (
    <LinkNav
      to={to}
      className={({ isActive }) => {
        return (
          (isActive && highlightWhenActive ? 'text-rapptr-blue' : '') +
          ' hover:text-rapptr-blue focus-visible:text-rapptr-blue transition-colors'
        );
      }}
    >
      {capitalizeFirstLetter(children)}
    </LinkNav>
  );
}
