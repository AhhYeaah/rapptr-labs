import React, { ReactNode } from 'react';

interface ButtonProps {
  className?: string;
  hasDefaultSizing?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode[] | ReactNode;
}

export function Button({ className, children, onClick, disabled = false }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={'py-2 px-6  disabled:opacity-50 ' + className}
    >
      {children}
    </button>
  );
}
