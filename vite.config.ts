import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Synapse_Studies/",
  plugins: [react()],
  server: {
    port: 5173
  },
  resolve: {
    alias: [
      { find: "@", replacement: "/src" }
    ]
  }
});
