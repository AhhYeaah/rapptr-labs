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
    <Link to={to}>
      <FontAwesomeIcon icon={icon} className="text-2xl mr-3 hover:scale-110"></FontAwesomeIcon>
    </Link>
  );
}
