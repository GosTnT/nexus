import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./output.css";
import { NextUIProvider } from "@nextui-org/system";
import App from "./App";


const app = document.getElementById("root") as HTMLElement;
const root = createRoot(app);
root.render(
  <StrictMode>
    <Theme appearance="dark">
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </Theme>
  </StrictMode>,
);
