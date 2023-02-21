import React, { ReactNode } from 'react';

interface ButtonProps {
  className?: string;
  hasDefaultSizing?: boolean;
  onClick: () => void;
  children?: ReactNode[] | ReactNode;
}

export function Button({ className, children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={'py-2 px-6 ' + className}>
      {children}
    </button>
  );
}
