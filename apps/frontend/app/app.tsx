import Checkout from "@/containers/Checkout";
import HomePage from "@/containers/HomePage";
import { store } from "@/store/store";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Dashboard from "@/containers/Dashboard";
import "./output.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
const app = document.getElementById("root") as HTMLElement;
const root = createRoot(app);
root.render(
  <StrictMode>
    <Theme appearance="dark" accentColor="blue" radius="large">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Theme>
  </StrictMode>,
);
