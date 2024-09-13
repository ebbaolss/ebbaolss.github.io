import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // Adjust this if your repository name is different
  build: {
    outDir: "build", // Ensure the build directory is correct
  },
});
