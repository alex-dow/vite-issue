import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const aliases = {
  '@': path.resolve(__dirname, 'src'),
  '@mytest/lib': path.resolve(__dirname, '..', 'lib', 'src')
};


const config = defineConfig({
  resolve: {
    alias: aliases
  },
  

  build: {
    sourcemap: true,
    minify: true,
    
  },

  plugins: [
    vue()
  ]
});

export default config;
