import React from 'react';
import { RefT } from 'utils/types';

type Props = {
  home: RefT;
  projects: RefT;
  technologies: RefT;
};

export const NavBar = ({ home, projects, technologies }: Props) => {
  return (
    <nav className="w-full flex justify-end pr-12 text-gray-300 fixed text-base bg-inherit py-3 z-10">
      <ul className="flex gap-4 items-center">
        <li className="list-el">
          <button
            onClick={() => home.current.scrollIntoView({ behavior: 'smooth' })}
          >
            Home
          </button>
        </li>
        <li className="list-el">
          <button
            onClick={() =>
              technologies.current.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Technologies
          </button>
        </li>
        <li className="list-el">
          <button
            onClick={() =>
              projects.current.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Projects
          </button>
        </li>
      </ul>
    </nav>
  );
};
