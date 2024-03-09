import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BoosterCard } from "./BoosterCard";
import { MyCarousel } from "./Carousel";
import { Features } from "./Features";
import { HeroSection } from "./HeroSection";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { Title } from "./components/nexus_components/text";
import "./output.css";

const app = document.getElementById("root") as HTMLElement;
const root = createRoot(app);

root.render(
  <StrictMode>
    <Theme appearance="dark">
      <NavigationMenuDemo />
      <HeroSection />
      <MyCarousel />

      <Features />
      <BoosterCard />
    </Theme>
  </StrictMode>,
);
