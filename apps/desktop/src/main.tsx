import { App } from "@/components/App";
import { createRoot } from "react-dom/client";
import "./output.css";
const app = document.getElementById("root") as HTMLElement;
const root = createRoot(app);
root.render(
  <>
    <App />
  </>,
);
