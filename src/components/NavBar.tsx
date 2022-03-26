import React from 'react';

type Props = {
  home: React.RefObject<HTMLElement>;
  projects: React.RefObject<HTMLElement>;
  technologies: React.RefObject<HTMLElement>;
};

export const NavBar = ({ home, projects, technologies }: Props) => {
  return (
    <nav className="w-full flex justify-end pr-4 text-gray-400 fixed">
      <ul className="flex gap-4 items-center">
        <li>
          <button
            onClick={() => home.current.scrollIntoView({ behavior: 'smooth' })}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              technologies.current.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Technologies
          </button>
        </li>
        <li>
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
