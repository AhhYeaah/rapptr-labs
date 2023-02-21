import React, { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LightModesButton } from '../Button/LightModesButton';
import { Logo } from '../Logo/Logo';
import { NavbarButtonGroup } from '../Navbar/NavbarButtonGroup/NavbarButtonGroup';
import { NavbarButtonGroupLink } from '../Navbar/NavbarButtonGroup/NavbarButtonGroupLink/NavbarButtonGroupLink';

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="grow-0 h-96 bg-rapptr-black flex-center flex-col text-white">
      <div className="max-w-screen-lg  w-full">
        <div className="w-full grid grid-cols-10 pl-4">
          <div className="col-span-2">
            <Logo darkMode={true} classNames="h-[58px]"></Logo>
          </div>
          <nav className="col-span-2">
            <h2 className="font-bold mb-2 ml-2 text-lg">Pages</h2>
            <NavbarButtonGroup colorIfActive={false} className="flex-col">
              <NavbarButtonGroupLink to="/">Home</NavbarButtonGroupLink>
              <NavbarButtonGroupLink>Work</NavbarButtonGroupLink>
              <NavbarButtonGroupLink>Approach</NavbarButtonGroupLink>
              <NavbarButtonGroupLink>About</NavbarButtonGroupLink>
              <NavbarButtonGroupLink>Jobs</NavbarButtonGroupLink>
            </NavbarButtonGroup>
          </nav>
          <nav className="col-span-3">
            <h2 className="font-bold mb-2 ml-2 text-lg">Services</h2>
            <NavbarButtonGroup colorIfActive={false} className="flex-col">
              <NavbarButtonGroupLink to="">App Design</NavbarButtonGroupLink>
              <NavbarButtonGroupLink>App Development</NavbarButtonGroupLink>
              <NavbarButtonGroupLink>Android App Development</NavbarButtonGroupLink>
            </NavbarButtonGroup>
          </nav>
          <div className="col-span-3">
            <h2 className="text-r mb-2 text-lg">Rapptr Labs</h2>
            <address className="mb-3 not-italic	 ">
              <p>
                185 Hudson St, Suite 2340 <br />
                Jersey City, NJ 07311 <br />
                (212) 913 9626
              </p>
            </address>
            <LightModesButton
              onClick={() => {
                navigate('/contact-us');
              }}
              darkMode={true}
              className={
                'w-full hover:scale-105 focus-visible:scale-105 hover:bg-white focus-visible:bg-white hover:text-rapptr-black focus-visible:rapptr-black'
              }
            >
              Contact Us
            </LightModesButton>
          </div>
        </div>
        <div className="mt-10 ">
          <span className="text-[#a7a9ac] text-sm">
            © 2023 Rapptr Labs. All Rights Reserved |
            <Link className="hover:text-rapptr-blue focus-visible:text-rapptr-blue" to="/policy">
              {' '}
              Privacy Policy{' '}
            </Link>
            |
            <Link className="hover:text-rapptr-blue focus-visible:text-rapptr-blue" to="/terms-of-service">
              {' '}
              Terms of Service{' '}
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
