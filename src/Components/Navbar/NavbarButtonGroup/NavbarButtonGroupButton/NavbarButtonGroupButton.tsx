import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LightModesButton } from '../../../Button/LightModesButton';

interface NavbarButtonGroupButtonProps {
  darkMode?: boolean;
  children: string;
}

export function NavbarButtonGroupButton({
  darkMode,
  children,
}: NavbarButtonGroupButtonProps) {
  const navigate = useNavigate();

  return (
    <li
      key={`NavbarButtonGroupButton - ${children}`}
      className="ml-4 list-none	"
    >
      <LightModesButton
        darkMode={darkMode}
        onClick={() => {
          navigate('/' + children.replace(' ', '-').toLowerCase());
        }}
        className="hover:scale-110 focus-visible:scale-110"
      >
        {children}
      </LightModesButton>
    </li>
  );
}
