import React, { forwardRef, RefObject } from 'react';

type Ref = RefObject<HTMLDivElement> | null;
export const Projects = forwardRef((props, ref: Ref) => {
  return <section ref={ref}>Projects</section>;
});
