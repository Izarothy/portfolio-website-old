import React, { forwardRef } from 'react';
import { RefT } from 'utils/types';
import { Project } from './Project';

export const Projects = forwardRef((props, ref: RefT) => (
  <section ref={ref} role="article">
    <h3 className="text-3xl text-center mt-8 font-bold mb-8">
      Notable Projects
    </h3>
    <div className="grid sm:grid-cols-2 gap-4">
      <Project
        title="Art Gallery"
        bg="art-gallery"
        live="https://art-gallery-tawerna.vercel.app/"
        github="https://github.com/Izarothy/art-gallery-tawerna"
      />
      <Project
        title="Blog App"
        bg="blogapp"
        live="https://blog-app-sooty.vercel.app/"
        github="https://github.com/Izarothy/blog-app"
      />
    </div>
  </section>
));
