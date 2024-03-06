import { ReactNode } from 'react';
// HeadingWrapper.js
import React from 'react';
import { Heading } from '@radix-ui/themes';

interface TitleProps {
  children: ReactNode;
}
const Title = ({ children }: TitleProps) => {
  return (
    <Heading size="8" weight="medium" className="text-title" mb="3">
      {children}
    </Heading>
  );
};

export default Title;
// import { Heading, Text } from "@radix-ui/themes";
//
// Heading = <Heading className="text-4xl font-semibold tracking-tight text-title mb-6">
//
// Text ()=> {    return(<Text className="text-lg leading-7 text-subtext mb-6">)}
//     titleStyle = 'text-4xl font-semibold tracking-tight text-title';
//
//
//     export default Text
