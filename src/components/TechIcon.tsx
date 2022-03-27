import React from 'react';

type Props = {
  name: string;
};
export const TechIcon = ({ name }: Props) => (
  <div className="flex items-center gap-2 my-3">
    <img
      src={`icons/${name.toLowerCase()}.svg`}
      width="18px"
      height="18px"
      alt="Technology icon"
    />
    <span>{name}</span>
  </div>
);
