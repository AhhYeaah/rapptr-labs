import React, { ReactNode } from 'react';
import { Button } from './Button';

interface LightModesButtonProps {
  darkMode?: boolean;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
  children?: ReactNode[] | ReactNode;
}

export function LightModesButton({
  children,
  className,
  onClick,
  darkMode = true,
  disabled = false,
}: LightModesButtonProps) {
  return (
    <Button
      disabled={disabled}
      className={
        ' border rounded-md transition-all ' +
        (darkMode ? ' border-white bg-rapptr-black ' : ' border-rapptr-black bg-white ') +
        className
      }
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
