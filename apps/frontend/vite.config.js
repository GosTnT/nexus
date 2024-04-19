import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react({ include: "**/*.tsx" })],
  build: {
    minify: true,
    cssMinify: true, // or 'lightningcss'
  },
  resolve: {
    alias: [{ find: "@", replacement: "/app" }],
  },
});
