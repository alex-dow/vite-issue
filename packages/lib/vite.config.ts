import path from 'path';
import { PluginOption, defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import pkg from './package.json' assert { type: 'json' };

const isDev = process.env?.NODE_ENV === 'development';

const dependencies = [
    ...Object.keys(pkg.dependencies)
];

const rootDir = path.resolve(__dirname);
const srcDir =  path.join(rootDir, 'src');

const buildPlugins: PluginOption[] = [
    vue(),
    dts() 
];

const config = defineConfig({

    resolve: {
        alias: {
            '@/*': srcDir
        }
    },

    build: {
        emptyOutDir: false,
        sourcemap: true,
        minify: false,
        target: 'esnext',
        cssCodeSplit: false,
        cssMinify: false,
        
        lib: {
            entry: path.resolve(srcDir, 'index.ts'),
            formats: ['es'],
            name: 'mytest-lib',

        },
        
        rollupOptions: {
            external: dependencies,
            output: {
                preserveModules: true
            }
        },
    },
    
    css: {
        devSourcemap: true
    },

    plugins: buildPlugins
});

export default config;  