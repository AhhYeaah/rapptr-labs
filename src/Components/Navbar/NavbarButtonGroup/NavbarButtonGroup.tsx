import React, { Children, ReactNode } from 'react';

interface NavbarButtonGroupProps {
  className: string;
  children: ReactNode[] | ReactNode;
  hasMargin?: boolean;
  colorIfActive: boolean;
}

export function NavbarButtonGroup({
  children,
  className,
  colorIfActive = true,
  hasMargin = true,
}: NavbarButtonGroupProps) {
  return (
    <ul className={'flex ' + className}>
      {Children.map(children, (child: any) => {
        return React.cloneElement(child, {
          colorIfActive,
          hasMargin,
        });
      })}
    </ul>
  );
}
