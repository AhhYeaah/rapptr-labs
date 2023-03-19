import React from 'react';

import { useNavigate } from 'react-router-dom';
import { LightModesButton } from '../Button/LightModesButton';
import { Logo } from '../Logo/Logo';
import { NavLink } from '../Navbar/NavLinkGroup/NavLink/NavLink';
import { NavLinkGroup } from '../Navbar/NavLinkGroup/NavLinkGroup';
import { SocialIconsRow } from '../SocialIconsRow/SocialIconsRow';
import { CopyrightWarning } from './CopyrightWarning/CopyrightWarning';
import { FooterSection } from './FooterSection/FooterSection';

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-rapptr-black text-white px-4 grow-0 flex-center flex-col h-auto lg:h-96 snap-end">
      <div className="py-14 lg:py-0 lg:w-full lg:max-w-screen-lg">
        <div className="grid gap-10 lg:w-full lg:grid-rows-1 lg:grid-cols-10 lg:gap-0">
          <FooterSection className="lg:col-span-2">
            <div className="flex-center lg:block">
              <Logo darkMode={true} className="h-24 lg:h-14"></Logo>
            </div>
          </FooterSection>

          <FooterSection className="lg:col-span-2">
            <NavLinkGroup className="flex-col font-bold" activeHighliting={false}>
              <NavLink to={'/'}>Home</NavLink>
              <NavLink>Work</NavLink>
              <NavLink>Approach</NavLink>
              <NavLink>About</NavLink>
              <NavLink>Jobs</NavLink>
            </NavLinkGroup>
          </FooterSection>

          <FooterSection className="lg:col-span-3">
            <NavLinkGroup className="flex-col" activeHighliting={false}>
              <h2 className="font-bold mb-2 text-lg">Services</h2>
              <NavLink>App Design</NavLink>
              <NavLink>App Development</NavLink>
              <NavLink>Android App Development</NavLink>
            </NavLinkGroup>
          </FooterSection>

          <FooterSection className="lg:col-span-3">
            <div>
              <h2 className="mb-2 text-rapptr-blue text-lg">Rapptr Labs</h2>
              <address className="mb-3 not-italic	 ">
                <p>
                  185 Hudson St, Suite 2340 <br />
                  Jersey City, NJ 07311 <br />
                  (212) 913 9626
                </p>
              </address>
            </div>
            <div className="flex flex-col-reverse lg:flex-col items-center lg:items-start">
              <LightModesButton
                onClick={() => {
                  navigate('/contact-us');
                }}
                darkMode={true}
                className={
                  'w-40 mx-auto hover:scale-105 focus-visible:scale-105 hover:bg-white focus-visible:bg-white hover:text-rapptr-black focus-visible:text-rapptr-black lg:w-full '
                }
              >
                Contact Us
              </LightModesButton>
              <SocialIconsRow className="text-white mb-6 lg:mb-0 lg:mt-4"></SocialIconsRow>
            </div>
          </FooterSection>
        </div>
        <div className="mt-8">
          <FooterSection className="lg:col-span-1">
            <CopyrightWarning />
          </FooterSection>
        </div>
      </div>
    </footer>
  );
}
