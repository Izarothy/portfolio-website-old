import React, { forwardRef } from 'react';
import { RefT } from 'utils/types';
import { TechIcon } from './TechIcon';

export const Technologies = forwardRef((props, ref: RefT) => (
  <section className="w-full mt-8" ref={ref}>
    <h2 className="text-2xl font-bold">Technologies ⌨️</h2>
    <span className="text-gray-300">
      Day-to-day technologies that help me with development
    </span>

    <h3 className="font-bold mt-8">Front End</h3>
    <div className="tech-icons">
      {['React', 'NextJS', 'TypeScript', 'Tailwind'].map((tech) => (
        <TechIcon key={tech} name={tech} />
      ))}
    </div>
    <h3 className="font-bold mt-8">Miscellaneous</h3>
    <div className="tech-icons">
      {['GraphCMS', 'Vercel', 'MongoDB', 'Git'].map((tech) => (
        <TechIcon key={tech} name={tech} />
      ))}
    </div>
  </section>
));
