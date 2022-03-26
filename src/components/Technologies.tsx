import React, { forwardRef } from 'react';
import { RefT } from 'utils/types';

export const Technologies = forwardRef((props, ref: RefT) => {
  return (
    <section className="w-full" ref={ref}>
      Technologies
    </section>
  );
});
