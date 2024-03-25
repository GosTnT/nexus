import { createContext, useContext } from "react";

export const HeroSectionContext = createContext<boolean>(false);

export function useHeroContext() {
  const isMoved = useContext(HeroSectionContext);
  if (isMoved === undefined) {
    throw new Error(`HeroSectionContext must be used with Button`);
  }
  return isMoved;
}
