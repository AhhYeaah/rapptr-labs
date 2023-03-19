import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LightModesButton } from '../../Button/LightModesButton';
import { NavLink } from '../NavLinkGroup/NavLink/NavLink';
import { NavLinkGroup } from '../NavLinkGroup/NavLinkGroup';
import './NavbarDrawer.css';

export function NavbarDrawer({ darkMode }: { darkMode: boolean }) {
  const [isDrawerOpen, openDrawer] = useState(false);
  const [canDrawerBeOpenned, setCanDrawerBeOppened] = useState(false);

  const drawerState = canDrawerBeOpenned && isDrawerOpen;
  const navigate = useNavigate();

  const button = useRef(null);
  const observer = new IntersectionObserver(([entry]) =>
    setCanDrawerBeOppened(entry.isIntersecting)
  );

  useEffect(() => {
    observer.observe(button.current!);

    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        className={'flex items-end mt-1 lg:hidden dark:text-white text-rapptr-black'}
        ref={button}
      >
        <button onClick={() => openDrawer(!isDrawerOpen)}>
          <FontAwesomeIcon icon={faBars} className="text-[28px]"></FontAwesomeIcon>
        </button>
      </div>
      <div
        aria-expanded={canDrawerBeOpenned ? drawerState : null}
        className={'navbarDrawer flex-center'}
      >
        <NavLinkGroup
          className={
            'lg:visible lg:gap-8 flex-col gap-8 lg:flex-row flex-center dark:text-white text-rapptr-black' +
            (drawerState ? 'flex-row' : '')
          }
          activeHighliting={true}
        >
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
    </>
  );
}
