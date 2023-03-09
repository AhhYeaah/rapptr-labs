import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface SocialIconProps {
  icon: IconDefinition;
  to: string;
}

export function SocialIcon({ icon, to }: SocialIconProps) {
  return (
    <Link to={to} className="mr-3 last:mr-0 ">
      <FontAwesomeIcon icon={icon} className="text-3xl hover:scale-110 focus:scale-110"></FontAwesomeIcon>
    </Link>
  );
}
