"use strict";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=76863dd8"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import Checkout from "/app/containers/Checkout/index.tsx";
import HomePage from "/app/containers/HomePage/index.tsx";
import { store } from "/app/store/store.tsx";
import { Theme } from "/node_modules/.vite/deps/@radix-ui_themes.js?v=76863dd8";
import "/@fs/home/jacoba/Documentos/realprojects/nexus/node_modules/@radix-ui/themes/styles.css";
import __vite__cjsImport6_react from "/node_modules/.vite/deps/react.js?v=76863dd8"; const StrictMode = __vite__cjsImport6_react["StrictMode"];
import __vite__cjsImport7_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=76863dd8"; const createRoot = __vite__cjsImport7_reactDom_client["createRoot"];
import { Provider } from "/node_modules/.vite/deps/react-redux.js?v=76863dd8";
import { RouterProvider, createBrowserRouter } from "/node_modules/.vite/deps/react-router-dom.js?v=76863dd8";
import "/app/output.css";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: /* @__PURE__ */ jsxDEV(HomePage, {}, void 0, false, {
        fileName: "/home/jacoba/Documentos/realprojects/nexus/apps/frontend/app/app.tsx",
        lineNumber: 16,
        columnNumber: 12
      }, this)
    },
    {
      path: "/checkout",
      element: /* @__PURE__ */ jsxDEV(Checkout, {}, void 0, false, {
        fileName: "/home/jacoba/Documentos/realprojects/nexus/apps/frontend/app/app.tsx",
        lineNumber: 20,
        columnNumber: 12
      }, this)
    }
  ]
);
const app = document.getElementById("root");
const root = createRoot(app);
root.render(
  /* @__PURE__ */ jsxDEV(StrictMode, { children: /* @__PURE__ */ jsxDEV(Theme, { appearance: "dark", accentColor: "blue", radius: "large", children: /* @__PURE__ */ jsxDEV(Provider, { store, children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
    fileName: "/home/jacoba/Documentos/realprojects/nexus/apps/frontend/app/app.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/home/jacoba/Documentos/realprojects/nexus/apps/frontend/app/app.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/jacoba/Documentos/realprojects/nexus/apps/frontend/app/app.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "/home/jacoba/Documentos/realprojects/nexus/apps/frontend/app/app.tsx",
    lineNumber: 26,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQWVhO0FBZmIsT0FBT0EsY0FBYztBQUNyQixPQUFPQyxjQUFjO0FBQ3JCLFNBQVNDLGFBQWE7QUFDdEIsU0FBU0MsYUFBYTtBQUN0QixPQUFPO0FBRVAsU0FBU0Msa0JBQWtCO0FBQzNCLFNBQVNDLGtCQUFrQjtBQUMzQixTQUFTQyxnQkFBZ0I7QUFDekIsU0FBU0MsZ0JBQWdCQywyQkFBMkI7QUFFcEQsT0FBTztBQUNQLE1BQU1DLFNBQVNEO0FBQUFBLEVBQW9CO0FBQUEsSUFDakM7QUFBQSxNQUNFRSxNQUFNO0FBQUEsTUFDTkMsU0FBUyx1QkFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUztBQUFBLElBQ3BCO0FBQUEsSUFDQTtBQUFBLE1BQ0VELE1BQU07QUFBQSxNQUNOQyxTQUFTLHVCQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFTO0FBQUEsSUFDcEI7QUFBQSxFQUFDO0FBQ0Y7QUFDRCxNQUFNQyxNQUFNQyxTQUFTQyxlQUFlLE1BQU07QUFDMUMsTUFBTUMsT0FBT1YsV0FBV08sR0FBRztBQUMzQkcsS0FBS0M7QUFBQUEsRUFDSCx1QkFBQyxjQUNDLGlDQUFDLFNBQU0sWUFBVyxRQUFPLGFBQVksUUFBTyxRQUFPLFNBQ2pELGlDQUFDLFlBQVMsT0FDUixpQ0FBQyxrQkFBZSxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQStCLEtBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FJQSxLQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FNQTtBQUNGIiwibmFtZXMiOlsiQ2hlY2tvdXQiLCJIb21lUGFnZSIsInN0b3JlIiwiVGhlbWUiLCJTdHJpY3RNb2RlIiwiY3JlYXRlUm9vdCIsIlByb3ZpZGVyIiwiUm91dGVyUHJvdmlkZXIiLCJjcmVhdGVCcm93c2VyUm91dGVyIiwicm91dGVyIiwicGF0aCIsImVsZW1lbnQiLCJhcHAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VzIjpbImFwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoZWNrb3V0IGZyb20gXCJAL2NvbnRhaW5lcnMvQ2hlY2tvdXRcIjtcbmltcG9ydCBIb21lUGFnZSBmcm9tIFwiQC9jb250YWluZXJzL0hvbWVQYWdlXCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCJAL3N0b3JlL3N0b3JlXCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCJAcmFkaXgtdWkvdGhlbWVzXCI7XG5pbXBvcnQgXCJAcmFkaXgtdWkvdGhlbWVzL3N0eWxlcy5jc3NcIjtcblxuaW1wb3J0IHsgU3RyaWN0TW9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgUm91dGVyUHJvdmlkZXIsIGNyZWF0ZUJyb3dzZXJSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgXCIuL291dHB1dC5jc3NcIjtcbmNvbnN0IHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIoW1xuICB7XG4gICAgcGF0aDogXCIvXCIsXG4gICAgZWxlbWVudDogPEhvbWVQYWdlIC8+LFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvY2hlY2tvdXRcIixcbiAgICBlbGVtZW50OiA8Q2hlY2tvdXQgLz4sXG4gIH0sXG5dKTtcbmNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGFwcCk7XG5yb290LnJlbmRlcihcbiAgPFN0cmljdE1vZGU+XG4gICAgPFRoZW1lIGFwcGVhcmFuY2U9XCJkYXJrXCIgYWNjZW50Q29sb3I9XCJibHVlXCIgcmFkaXVzPVwibGFyZ2VcIj5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9IC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvVGhlbWU+XG4gIDwvU3RyaWN0TW9kZT4sXG4pO1xuIl0sImZpbGUiOiIvaG9tZS9qYWNvYmEvRG9jdW1lbnRvcy9yZWFscHJvamVjdHMvbmV4dXMvYXBwcy9mcm9udGVuZC9hcHAvYXBwLnRzeCJ9