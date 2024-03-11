import { NextUIProvider } from "@nextui-org/system";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./containers/App";
// import history from "lib/history";

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
