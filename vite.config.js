import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";
import svgr from "@svgr/rollup";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    svgr(),
    nodePolyfills({
      protocolImports: true,
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '@mui/utils': '@mui/utils/esm',
    },
  },
  build: {
    chunkSizeWarningLimit: 6000,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === "EVAL") return;
        warn(warning);
      },
    },
  },
});
