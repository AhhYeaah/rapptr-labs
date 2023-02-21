import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../Logo/Logo';
import { NavbarButtonGroup } from './NavbarButtonGroup/NavbarButtonGroup';
import { NavbarButtonGroupButton } from './NavbarButtonGroup/NavbarButtonGroupButton/NavbarButtonGroupButton';
import { NavbarButtonGroupLink } from './NavbarButtonGroup/NavbarButtonGroupLink/NavbarButtonGroupLink';

interface NavbarProps {
  darkMode?: boolean;
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
      return 96;
    }

    if (isUserScrollingDown) {
      return 0;
    } else {
      return 80;
    }
  }

  return (
    <header className="sticky top-0 h-24">
      <div
        className={
          'flex-center overflow-hidden transition-all duration-200 ' +
          (darkMode ? 'bg-black text-white ' : ' bg-white text-black ') +
          (isOnTopOfDocument ? ' ' : ' shadow-lg ') +
          (isUserScrollingDown ? ' invisible' : ' visible ')
        }
        style={{ height: getNavBarHeight() }}
      >
        <div className="container max-w-screen-lg p-4 mx-4 flex-between">
          <div>
            <a
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer"
            >
              <Logo darkMode={darkMode} classNames="h-[58px]" />
            </a>
          </div>

          <div>
            <NavbarButtonGroup>
              <NavbarButtonGroupLink to="">Home</NavbarButtonGroupLink>
              <NavbarButtonGroupLink>Work</NavbarButtonGroupLink>
              <NavbarButtonGroupLink>Approach</NavbarButtonGroupLink>
              <NavbarButtonGroupLink>About</NavbarButtonGroupLink>
              <NavbarButtonGroupLink>Jobs</NavbarButtonGroupLink>
              <NavbarButtonGroupButton darkMode={darkMode}>Contact Us</NavbarButtonGroupButton>
            </NavbarButtonGroup>
          </div>
        </div>
      </div>
    </header>
  );
}
