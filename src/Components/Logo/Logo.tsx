import React, { ReactNode } from 'react';

import lightLogoUrl from '../../assets/svg/white-logo.svg';
import darkLogoUrl from '../../assets/svg/logo.svg';

interface LogoProps {
  classNames?: string;
  lightMode?: boolean;
}

export function Logo({ classNames, lightMode = false }: LogoProps) {
  return <img src={lightMode ? lightLogoUrl : darkLogoUrl} alt="Rapptr Labs Logo" className={classNames} />;
}
