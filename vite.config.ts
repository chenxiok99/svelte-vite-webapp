import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import legacy from "@vitejs/plugin-legacy";
import compressPlugin from "vite-plugin-compression";
import mpa from "vite-plugin-mpa";
import ip from "ip";
import path from "path";

/**
 * https://vitejs.dev/config/
 */
export default defineConfig(() => {
  const serverPath = process.env.npm_config_serve;

  return {
    resolve: {
      alias: { "@": path.resolve("./src") },
      extensions: [".less", ".svelte", ".ts", ".js", ".html", ".json"],
    },
    define: {
      "process.env.Mode": JSON.stringify(process.env.Mode),
    },
    plugins: [
      mpa({
        open: `/${serverPath}/index.html`,
      }),
      svelte(),
      /**
       * 对不支持ESModule的老浏览器提供支持
       */
      legacy(),
      /**
       * 开启gzip压缩
       */
      compressPlugin({
        ext: ".gz",
        algorithm: "gzip",
      }),
    ],
    server: {
      host: ip.address(),
      port: 3000,
      open: true,
    },
    build: {
      target: "esnext",
      chunkSizeWarningLimit: 1500,
      /**
       * 兼容打包commonjs语法
       */
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
  };
});
