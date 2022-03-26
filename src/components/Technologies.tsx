import React, { forwardRef } from 'react';
import { RefT } from 'utils/types';
import { TechIcon } from './TechIcon';

export const Technologies = forwardRef((props, ref: RefT) => {
  return (
    <section className="w-full mt-8" ref={ref}>
      <h2 className="text-2xl font-bold">Technologies ⌨️</h2>
      <span className="text-gray-300">
        Day-to-day technologies that help me with development
      </span>

      <h3 className="font-bold mt-8">Front End</h3>
      <div className="tech-icons">
        {['React', 'NextJS', 'TypeScript', 'Tailwind'].map((tech) => {
          return <TechIcon key={tech} name={tech} />;
        })}
      </div>
      <h3 className="font-bold mt-8">Miscellaneous</h3>
      <div className="tech-icons">
        {['GraphCMS', 'Vercel', 'MongoDB', 'Git'].map((tech) => {
          return <TechIcon key={tech} name={tech} />;
        })}
      </div>
      <p className="mt-8">
        My OS is Windows 11, although I really like Linux distros. Visual Studio
        Code is my code editor of choice (
        <a
          className="cursor-pointer text-blue-400"
          href="https://pastebin.com/CPSGkdqr"
        >
          extension list
        </a>
        ), with Ayu Blue as the color theme.
      </p>
    </section>
  );
});
