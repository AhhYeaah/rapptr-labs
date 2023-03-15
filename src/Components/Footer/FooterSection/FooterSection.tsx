import React, { ReactNode } from 'react';

interface FooterSectionProps {
  className: string;
  children?: ReactNode[] | ReactNode;
}

export function FooterSection({ children, className }: FooterSectionProps) {
  return <div className={'text-center lg:text-left ' + className}>{children}</div>;
}
