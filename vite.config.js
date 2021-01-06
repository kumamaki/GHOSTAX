import path from 'path';
import Markdown from 'vite-plugin-md';
import ViteComponents from 'vite-plugin-components'

const alias = {
    "/@root/": path.resolve(__dirname, "."),
    "/@src/": path.resolve(__dirname, "./src"),
    "/@core/": path.resolve(__dirname, "./src/components/core"),
    "/@unit/": path.resolve(__dirname, "./src/components/unit"),
    "/@complex/": path.resolve(__dirname, "./src/components/complex"),
    "/@layout/": path.resolve(__dirname, "./src/components/layout"),
    "/@page/": path.resolve(__dirname, "./src/components/page"),
    "/@images/": path.resolve(__dirname, "./src/assets/images"),
    "/@styles/": path.resolve(__dirname, "./src/assets/styles"),
    "/@helpers/": path.resolve(__dirname, "./src/helpers"),
    "/@icons/": path.resolve(__dirname, "./src/assets/svg-icons"),
    "/@router/": path.resolve(__dirname, "./src/router"),
    "/@packages/": path.resolve(__dirname, "./packages")
};

export default {
    alias,
    plugins: [
        Markdown({
            wrapperClasses: 'markdown-body'
        }),
        ViteComponents({
            dirs: [ "./src/components" ],
            alias
        })
    ]
};