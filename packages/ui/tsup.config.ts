import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/**/*.{ts,tsx,css,woff2}"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  ...options,
}));
