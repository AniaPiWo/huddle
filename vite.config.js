import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  base: "/huddle/",
  root: "./",
  build: {
    outDir: "dist",
  },
}