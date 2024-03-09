import { Theme } from "@radix-ui/themes";
import LastCallToAction from "./LastCallToAction";
import "@radix-ui/themes/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BoosterCard } from "./BoosterCard";
import { MyCarousel } from "./Carousel";
import { Features } from "./Features";
import { HeroSection } from "./HeroSection";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { Faq } from "./Faq";
import "./output.css";

import { NextUIProvider } from "@nextui-org/system";
const app = document.getElementById("root") as HTMLElement;
const root = createRoot(app);
root.render(
  <StrictMode>
    <Theme appearance="dark">
      <NextUIProvider>
        <NavigationMenuDemo />
        <HeroSection />
        <MyCarousel />

        <Features />
        <BoosterCard />
        <Faq />
        <LastCallToAction />
      </NextUIProvider>
    </Theme>
  </StrictMode>,
);
