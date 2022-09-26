import path from 'path';
import { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { proxy } from "./src/cool/config/proxy";
import { cool } from "./build/cool";
import Unocss from "unocss/vite";
import { presetUno } from "unocss";

function resolve (dir: string) {
  return path.resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/

export default (): UserConfig => ({
  base: "/",
  plugins: [
    vue(),
    Unocss({
      presets: [presetUno()]
    }),
    cool(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        charset: false
      }
    }
  },
  resolve: {
    alias: {
      "/@": resolve("src"),
      "/#": resolve("types"),
      "/$": resolve("src/modules")
    }
  },
  server: {
    port: 9001,
    proxy,
    hmr: {
      overlay: true
    }
  },
});
