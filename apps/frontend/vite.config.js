import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const watcherOptions = {
  buildDelay: 0, // Example build delay in milliseconds
  chokidar: {
    // Chokidar options here
  },
  clearScreen: true,
  exclude: /node_modules/,
  include: /src/,
  skipWrite: false,
};
export default defineConfig({
  server: {
    watcher: watcherOptions,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

