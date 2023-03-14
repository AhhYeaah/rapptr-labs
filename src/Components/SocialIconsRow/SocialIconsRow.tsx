import {
  faLinkedin,
  faSquareFacebook,
  faSquareTwitter,
} from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { SocialIcon } from './SocialIcon/SocialIcon';

interface SocialRowProps {
  className?: string;
}

export function SocialIconsRow({ className }: SocialRowProps) {
  return (
    <div className={className + ' inline-flex grow-0 gap-3 flex-row'}>
      <SocialIcon icon={faLinkedin} to="https://www.linkedin.com/company/rapptr" />
      <SocialIcon icon={faSquareFacebook} to="https://www.facebook.com/rapptrlabs" />
      <SocialIcon icon={faSquareTwitter} to="https://twitter.com/rapptrlabs" />
    </div>
  );
}
