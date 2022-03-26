import React, { useState } from 'react';

type Props = {
  bg: string;
  live: string;
  github: string;
};
export const Project = ({ bg, live, github }: Props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className={`hover:opacity-70 transform duration-300 ease-in-out h-80 bg-${bg} bg-cover rounded-sm`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={`${
          hovered ? `block` : `hidden`
        } absolute bottom-4 flex justify-center w-full gap-4`}
      >
        <a
          href={live}
          target="_blank"
          className="p-2 px-4 hover:bg-white hover:text-primary-dark border border-white rounded-xl"
        >
          Live version
        </a>
        <a
          href={github}
          target="_blank"
          className="p-2 px-4 hover:bg-white hover:text-primary-dark border border-white rounded-xl"
        >
          Code
        </a>
      </span>
    </article>
  );
};
