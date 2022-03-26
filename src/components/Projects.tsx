import React, { forwardRef, RefObject } from 'react';
import { RefT } from 'utils/types';

export const Projects = forwardRef((props, ref: RefT) => {
  return <section ref={ref}>Projects</section>;
});
