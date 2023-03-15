import React, { Children, ReactNode } from 'react';
import { NavLinkHighlightingContext } from './NavLinkHighlightingContext';

interface NavbarLinkGroupProps {
  className?: string;
  children: ReactNode[] | ReactNode;
  activeHighliting: boolean;
}

export function NavLinkGroup({
  children,
  className,
  activeHighliting,
}: NavbarLinkGroupProps) {
  return (
    <nav>
      <ul className={'flex list-none ' + className}>
        <NavLinkHighlightingContext.Provider value={activeHighliting}>
          {Children.map(children, (child: any) => {
            return <li>{child}</li>;
          })}
        </NavLinkHighlightingContext.Provider>
      </ul>
    </nav>
  );
}
