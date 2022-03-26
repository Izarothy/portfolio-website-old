import React from 'react';

type Props = {
  name: string;
};
export const TechIcon = ({ name }: Props) => {
  return (
    <div className="flex items-center gap-2 my-3">
      <img src={`icons/${name.toLowerCase()}.svg`} width="18px" height="18px" />
      <span>{name}</span>
    </div>
  );
};
