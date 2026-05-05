/**
 * type {import('vite').UserConfig}
 */
import path from 'path';
import Vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';
import Components from 'vite-plugin-components';
import ViteRestart from 'vite-plugin-restart';
import viteSvgIcons from 'vite-plugin-svg-icons';

export const alias = {
    '/@root': path.resolve(__dirname, '.'),
    '/@src': path.resolve(__dirname, './src'),
    '/@core': path.resolve(__dirname, './src/components/core'),
    '/@page': path.resolve(__dirname, './src/components/page'),
    '/@images': path.resolve(__dirname, './src/assets/images'),
    '/@styles': path.resolve(__dirname, './src/assets/styles'),
    '/@helpers': path.resolve(__dirname, './src/helpers'),
    '/@icons': path.resolve(__dirname, './src/assets/svg-icons'),
    '/@router': path.resolve(__dirname, './src/router'),
    '/@packages': path.resolve(__dirname, './packages')
};

export default {
    resolve: {
        alias
    },
    plugins: [
        Vue({
            include: [/\.vue$/, /\.md$/]
        }),
        viteSvgIcons({
            iconDirs: [path.resolve(__dirname, 'src/assets/svg-icons')],
            symbolId: 'icon-[name]'
        }),
        Markdown({
            markdownItOptions: {
                html: true,
                typographer: true
            },
            markdownItSetup(md) {
                md.use(require('markdown-it-anchor'), {
                    level: 2
                });
            },
            wrapperClasses: 'markdown-body'
        }),
        Components({
            dirs: ['./src/components'],
            customLoaderMatcher: (path) => { return path.endsWith('.md'); }
        }),
        ViteRestart({
            restart: [
                './packages/**/src/**/*'
            ]
        })
    ],
    build: { manifest: true },
    server: {
        open: true
    }
};
