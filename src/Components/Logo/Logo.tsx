import React from 'react';

import lightLogoUrl from '../../assets/svg/white-logo.svg';
import darkLogoUrl from '../../assets/svg/logo.svg';

interface LogoProps {
  className?: string;
  darkMode?: boolean;
}

export function Logo({ className, darkMode = false }: LogoProps) {
  return (
    <img
      draggable={false}
      src={darkMode ? lightLogoUrl : darkLogoUrl}
      alt="Rapptr Labs Logo"
      className={className ? className : 'h-14'}
    />
  );
}
