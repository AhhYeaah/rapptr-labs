import React, { ReactNode } from 'react';
import { Button } from './Button';

interface DarkButtonProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode[] | ReactNode;
}

export function DarkButton({ children, className, disabled, onClick }: DarkButtonProps) {
  return (
    <Button
      className={
        `bg-[#0e303d] text-white
       enabled:hover:bg-[#3E5963] enabled:hover:scale-105
        transition-all 
        rounded-lg ` + className
      }
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
