import React, { forwardRef } from 'react';

type Ref = React.RefObject<HTMLDivElement> | null;

export const Header = forwardRef((props, ref: Ref) => {
  return (
    <header ref={ref}>
      <h1 className="text-xl">Hi</h1>
    </header>
  );
});
