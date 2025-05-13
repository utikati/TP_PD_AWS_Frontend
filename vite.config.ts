import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import autoprefixer from "autoprefixer";
import sass from "sass";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const devOnly = mode === "development";

  return {
    plugins: [react(), svgr()],
    server: {
      host: true,
      port: 5173,
      watch: {
        usePolling: true,
      },
      open: true,
      // proxy: {
      //   "/api": {
      //     target: "http://localhost:5000",
      //     changeOrigin: true,
      //     secure: false,
      //   },
      // },
    },
    define: {
      "process.env": env,
    },
    build: {
      outDir: "dist",
      emptyOutDir: true,
      sourcemap: devOnly,
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "legacy",
          implementation: sass,
          outputStyle: "expanded",
          sourceMapContents: devOnly,
        },
      },
      postcss: {
        plugins: [autoprefixer],
      },
      devSourcemap: devOnly,
    },
  };
});
