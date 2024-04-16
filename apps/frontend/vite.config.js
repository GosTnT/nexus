import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
    cssMinify: true, // or 'lightningcss'
  },
  resolve: {
    alias: [{ find: "@", replacement: "/app" }],
  },
});
