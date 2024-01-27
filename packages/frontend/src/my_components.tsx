import React from 'react';

interface TittleProps {
  tag: keyof JSX.IntrinsicElements;
  text: string;
}

export function Tittle({ tag, text }: TittleProps): JSX.Element {
  const CustomTag = tag as keyof JSX.IntrinsicElements;

  return React.createElement(
    CustomTag,
    { className: 'font-tittle' },
    text
  );
}
export function subTittle({ tag, text }: TittleProps): JSX.Element {
  const CustomTag = tag as keyof JSX.IntrinsicElements;

  return React.createElement(
    CustomTag,
    { className: 'font-text antialiased text-secondary_text' },
    text
  );
}

export function text() {

}


