import React, { ReactNode } from 'react';

interface NavbarButtonGroupProps {
  value?: string;
  children?: ReactNode[] | ReactNode;
}

export function NavbarButtonGroup({ children }: NavbarButtonGroupProps) {
  return <ul className="flex flex-row flex-center">{children}</ul>;
}
