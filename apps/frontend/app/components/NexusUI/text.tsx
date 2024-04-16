import { Heading } from "@radix-ui/themes";
import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  return (
    <Heading
      size="8"
      weight="medium"
      className="text-center text-title font-general tracking-wide-[0.010em]"
    >
      {children}
    </Heading>
  );
};

export const SubTitle = ({ children }: TitleProps) => {
  return (
    <Heading size="9" weight="medium" className="text-title font-general">
      {children}
    </Heading>
  );
};

// import { Heading, Text } from "@radix-ui/themes";
//
// Heading = <Heading className="mb-6 text-4xl font-semibold tracking-tight text-title">
//
// Text ()=> {    return(<Text className="mb-6 text-lg leading-7 text-subtext">)}
//     titleStyle = 'text-4xl font-semibold tracking-tight text-title';
//
//
//     export default Text
