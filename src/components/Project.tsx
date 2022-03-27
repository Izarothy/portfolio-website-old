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
      className="h-80 bg-cover rounded-sm relative"
      style={{ backgroundImage: `url("assets/images/${bg}.png")` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(!hovered)}
      onKeyDown={() => setHovered(!hovered)}
    >
      <span
        className={`${
          hovered ? `bg-black/20` : ``
        } absolute w-full h-80 transition ease-in-out duration-500`}
      >
        <h3
          className={`text-center w-full absolute top-6 text-4xl [text-shadow:2px_2px_#111] font-bold ${
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
            className="project-link"
            rel="noreferrer"
          >
            Live version
          </a>
          <a
            href={github}
            target="_blank"
            className="project-link"
            rel="noreferrer"
          >
            Code
          </a>
        </span>
      </span>
    </article>
  );
};
