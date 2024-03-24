import { Heading, Text } from "@radix-ui/themes";
import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  return (
    <Heading
      size="8"
      weight="medium"
      className="text-title font-general text-center tracking-wide-[0.010em] "
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

export const SubText = ({ children }: TitleProps) => {
  return (
    <Text size="3" className="text-zinc-400 text-wrap tracking-wide-[0.010em]">
      {children}
    </Text>
  );
};

// import { Heading, Text } from "@radix-ui/themes";
//
// Heading = <Heading className="text-4xl font-semibold tracking-tight text-title mb-6">
//
// Text ()=> {    return(<Text className="text-lg leading-7 text-subtext mb-6">)}
//     titleStyle = 'text-4xl font-semibold tracking-tight text-title';
//
//
//     export default Text
