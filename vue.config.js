module.exports = {
    lintOnSave: false,

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                './src/assets/styles/helpers/*.scss',
                './src/assets/styles/variables/*.scss'
            ]
        }
    },

    assetsDir: 'assets',
    productionSourceMap: false,

    css: {
        sourceMap: true
    },

    chainWebpack: (config) => {
        config.module
            .rule('md')
            .test(/\.md$/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('remark-vue-loader')
            .loader('remark-vue-loader')
            .end();
    }
};
