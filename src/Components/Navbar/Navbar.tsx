import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../Logo/Logo';
import { NavbarDrawer } from './NavbarDrawer/NavbarDrawer';

interface NavbarProps {
  darkMode?: boolean;
}

export enum NavbarSizesInPixels {
  CLOSED = 0,
  SEMI_OPEN = 86,
  OPEN = 102,
}

const TOP_OF_DOCUMENT_THRESHOLD = 200;
const GRAY_AREA_THRESHOLD = 400;

function changeHTMLDarkClass(darkMode: boolean) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export function Navbar({ darkMode = false }: NavbarProps) {
  const [isOnTopOfDocument, changeIsOnTopOfDocument] = useState(true);
  const [isUserScrollingDown, changeIsUserScrollingDown] = useState(false);

  changeHTMLDarkClass(darkMode);

  const oldOffset = useRef(window.scrollY);

  //Scrolling
  useEffect(() => {
    function handleScrollingEvent() {
      const isGoingDown = oldOffset.current - window.scrollY < 0;
      const grayArea = window.scrollY < GRAY_AREA_THRESHOLD;

      changeIsOnTopOfDocument(window.scrollY < TOP_OF_DOCUMENT_THRESHOLD);
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
          (darkMode ? ' bg-rapptr-black ' : ' bg-white  ') +
          (isOnTopOfDocument ? ' ' : ' shadow-lg ') +
          (isUserScrollingDown ? ' invisible' : ' visible ')
        }
        style={{ height: getNavBarHeight() }}
      >
        <div className="w-full max-w-screen-lg p-4 mx-4 flex-between">
          <Link to={'/'} className="cursor-pointer">
            <Logo darkMode={darkMode} className="lg:h-14 h-12" />
          </Link>
          <NavbarDrawer darkMode={darkMode} />
        </div>
      </div>
    </header>
  );
}
