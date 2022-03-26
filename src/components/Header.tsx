import React, { forwardRef } from 'react';
import { RefT } from 'utils/types';

export const Header = forwardRef((props, ref: RefT) => {
  return (
    <header className="mt-16" ref={ref}>
      <span className="text-gray-500 text-lg">Hello 👋</span>
      <h1 className="text-3xl font-bold mb-12">
        I'm Michał, <br />a Front End Developer
      </h1>
      <img
        src="/images/background.jpg"
        className="sm:w-3/4"
        alt="Header image"
      />
    </header>
  );
});
