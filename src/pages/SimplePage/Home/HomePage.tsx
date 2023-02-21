import React from 'react';
import { useOutletContext } from 'react-router-dom';

export function HomePage() {
  const changeIsNavbarDark = useOutletContext<(value: boolean) => void>();
  changeIsNavbarDark(false);

  return (
    <div className="grow bg-red-200 flex-center">
      <div className="">
        <h1>We build apps that</h1>
      </div>
      We build apps that cativate
    </div>
  );
}
