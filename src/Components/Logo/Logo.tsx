import React, { ReactNode } from 'react';

import lightLogoUrl from '../../assets/svg/white-logo.svg';
import darkLogoUrl from '../../assets/svg/logo.svg';

interface LogoProps {
  classNames?: string;
  darkMode?: boolean;
}

export function Logo({ classNames, darkMode = false }: LogoProps) {
  return (
    <img
      src={darkMode ? lightLogoUrl : darkLogoUrl}
      alt="Rapptr Labs Logo"
      className={classNames ? classNames : 'h-14'}
    />
  );
}
