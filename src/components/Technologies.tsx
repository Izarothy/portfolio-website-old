import React, { forwardRef, RefObject } from 'react';

type Ref = RefObject<HTMLDivElement> | null;
export const Technologies = forwardRef((props, ref: Ref) => {
  return (
    <section className="w-full" ref={ref}>
      Technologies
    </section>
  );
});
