import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LightModesButton } from '../Button/LightModesButton';

import { Logo } from '../Logo/Logo';
import { NavLink } from './NavLinkGroup/NavLink/NavLink';
import { NavLinkGroup } from './NavLinkGroup/NavLinkGroup';

interface NavbarProps {
  darkMode?: boolean;
}

export enum NavbarSizesInPixels {
  CLOSED = 0,
  SEMI_OPEN = 86,
  OPEN = 102,
}

function changeBodyDarkProperty(darkMode: boolean) {
  document.body.setAttribute('dark', String(darkMode));
}

export function Navbar({ darkMode = false }: NavbarProps) {
  const [isOnTopOfDocument, changeIsOnTopOfDocument] = useState(true);
  const [isUserScrollingDown, changeIsUserScrollingDown] = useState(false);
  const navigate = useNavigate();

  changeBodyDarkProperty(darkMode);

  const oldOffset = useRef(window.scrollY);

  //Scrolling
  useEffect(() => {
    function handleScrollingEvent() {
      const isGoingDown = oldOffset.current - window.scrollY < 0;
      const grayArea = window.scrollY < 400;

      changeIsOnTopOfDocument(window.scrollY < 200);
      changeIsUserScrollingDown(grayArea ? false : isGoingDown);

      oldOffset.current = window.scrollY;
    }

    document.addEventListener('scroll', handleScrollingEvent);

    return () => document.removeEventListener('scroll', handleScrollingEvent);
  }, []);

  function getNavBarHeight() {
    if (isOnTopOfDocument) {
      return NavbarSizesInPixels.OPEN;
    }

    if (isUserScrollingDown) {
      return NavbarSizesInPixels.CLOSED;
    } else {
      return NavbarSizesInPixels.SEMI_OPEN;
    }
  }

  return (
    <header
      className="sticky z-30 grow-0 top-0"
      style={{
        height: NavbarSizesInPixels.OPEN,
        visibility: getNavBarHeight() === 0 ? 'hidden' : 'visible',
      }}
    >
      <div
        className={
          'flex-center overflow-hidden transition-all duration-300 ' +
          (darkMode ? ' text-white bg-rapptr-black ' : ' text-rapptr-black bg-white  ') +
          (isOnTopOfDocument ? ' ' : ' shadow-lg ') +
          (isUserScrollingDown ? ' invisible' : ' visible ')
        }
        style={{ height: getNavBarHeight() }}
      >
        <div className="w-full max-w-screen-lg p-4 mx-4 flex-between">
          <Link to={'/'} className="cursor-pointer">
            <Logo darkMode={darkMode} classNames="h-14" />
          </Link>

          <NavLinkGroup className="gap-8 flex-center" activeHighliting={true}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink>Work</NavLink>
            <NavLink>Approach</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Jobs</NavLink>
            <LightModesButton
              onClick={() => {
                navigate('/contact-us');
              }}
              className="hover:scale-110"
              darkMode={darkMode}
            >
              Contact us
            </LightModesButton>
          </NavLinkGroup>
        </div>
      </div>
    </header>
  );
}
