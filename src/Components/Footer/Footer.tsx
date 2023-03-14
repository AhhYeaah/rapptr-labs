import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { LightModesButton } from '../Button/LightModesButton';
import { Logo } from '../Logo/Logo';
import { NavbarButtonGroup } from '../Navbar/NavbarButtonGroup/NavbarButtonGroup';
import { NavbarButtonGroupLink } from '../Navbar/NavbarButtonGroup/NavbarButtonGroupLink/NavbarButtonGroupLink';
import { SocialIconsRow } from '../SocialIconsRow/SocialIconsRow';

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-rapptr-black text-white px-4 grow-0 flex-center flex-col h-auto lg:h-96 snap-end">
      <div className="py-14 w-auto lg:py-0 lg:w-full lg:max-w-screen-lg">
        <div className="w-auto grid grid-rows-3 grid-cols-1 gap-10 lg:w-full  lg:grid-rows-1 lg:grid-cols-10 lg:gap-0">
          <div className="flex-center lg:col-span-2 lg:block">
            <Logo darkMode={true} classNames="h-24 lg:h-14"></Logo>
          </div>
          <nav className="font-bold h-auto text-center lg:text-left lg:col-span-2 ">
            <NavbarButtonGroup
              colorIfActive={false}
              hasMargin={false}
              className="flex-col"
            >
              <NavbarButtonGroupLink to="/">Home</NavbarButtonGroupLink>
              <NavbarButtonGroupLink>Work</NavbarButtonGroupLink>
              <NavbarButtonGroupLink>Approach</NavbarButtonGroupLink>
              <NavbarButtonGroupLink>About</NavbarButtonGroupLink>
              <NavbarButtonGroupLink>Jobs</NavbarButtonGroupLink>
            </NavbarButtonGroup>
          </nav>
          <nav className="text-center lg:text-left lg:col-span-3">
            <h2 className="font-bold mb-2 text-lg">Services</h2>
            <NavbarButtonGroup
              colorIfActive={false}
              hasMargin={false}
              className="flex-col"
            >
              <NavbarButtonGroupLink>App Design</NavbarButtonGroupLink>
              <NavbarButtonGroupLink>App Development</NavbarButtonGroupLink>
              <NavbarButtonGroupLink>Android App Development</NavbarButtonGroupLink>
            </NavbarButtonGroup>
          </nav>
          <div className="text-center lg:text-left lg:col-span-3">
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
          </div>
        </div>
        <div className="mt-8">
          <span className="text-discreet text-sm">
            © 2023 Rapptr Labs. All Rights Reserved |
            <Link
              className="hover:text-rapptr-blue focus-visible:text-rapptr-blue"
              to="/policy"
            >
              {' '}
              Privacy Policy{' '}
            </Link>
            |
            <Link
              className="hover:text-rapptr-blue focus-visible:text-rapptr-blue"
              to="/tos"
            >
              {' '}
              Terms of Service{' '}
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
