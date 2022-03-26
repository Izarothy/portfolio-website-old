import React, { useState } from 'react';

type Props = {
  bg: string;
  live: string;
  github: string;
  title: string;
};
export const Project = ({ title, bg, live, github }: Props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className={`h-80 bg-${bg} bg-cover rounded-sm relative`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(!hovered)}
    >
      <h3
        className={`text-center w-full absolute top-20 text-3xl [text-shadow:1px_1px_#111] ${
          hovered ? `block` : `hidden`
        }`}
      >
        {title}
      </h3>
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
