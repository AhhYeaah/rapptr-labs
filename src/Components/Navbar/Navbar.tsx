import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../Logo/Logo';
import { NavbarButtonGroup } from './NavbarButtonGroup/NavbarButtonGroup';
import { NavbarButtonGroupButton } from './NavbarButtonGroup/NavbarButtonGroupButton/NavbarButtonGroupButton';
import { NavbarButtonGroupLink } from './NavbarButtonGroup/NavbarButtonGroupLink/NavbarButtonGroupLink';

interface NavbarProps {
  darkMode?: boolean;
}

export enum NavbarSizesInPixels {
  CLOSED = 0,
  SEMI_OPEN = 86,
  OPEN = 102,
}

export function Navbar({ darkMode = false }: NavbarProps) {
  const [isOnTopOfDocument, changeIsOnTopOfDocument] = useState(true);
  const [isUserScrollingDown, changeIsUserScrollingDown] = useState(false);

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
      className="sticky grow-0 top-0"
      style={{ height: NavbarSizesInPixels.OPEN, visibility: getNavBarHeight() === 0 ? 'hidden' : 'visible' }}
    >
      <div
        className={
          'flex-center overflow-hidden transition-all duration-300 ' +
          (darkMode ? 'bg-rapptr-black text-white ' : ' bg-white text-rapptr-black ') +
          (isOnTopOfDocument ? ' ' : ' shadow-lg ') +
          (isUserScrollingDown ? ' invisible' : ' visible ')
        }
        style={{ height: getNavBarHeight() }}
      >
        <div className="w-full max-w-screen-lg p-4 mx-4 flex-between">
          <div>
            <a
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer"
            >
              <Logo darkMode={darkMode} classNames="h-14" />
            </a>
          </div>

          <nav>
            <NavbarButtonGroup colorIfActive={true} className="items-center flex-row">
              <NavbarButtonGroupLink to="/">Home</NavbarButtonGroupLink>
              <NavbarButtonGroupLink>Work</NavbarButtonGroupLink>
              <NavbarButtonGroupLink>Approach</NavbarButtonGroupLink>
              <NavbarButtonGroupLink>About</NavbarButtonGroupLink>
              <NavbarButtonGroupLink>Jobs</NavbarButtonGroupLink>
              <NavbarButtonGroupButton darkMode={darkMode}>Contact Us</NavbarButtonGroupButton>
            </NavbarButtonGroup>
          </nav>
        </div>
      </div>
    </header>
  );
}
