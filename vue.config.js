module.exports = {
    lintOnSave: false,
    assetsDir: 'assets',
    devServer: {
        progress: false
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

        const svgRule = config.module.rule('svg');
        svgRule.uses.clear();
        svgRule
            .use('vue-loader')
            .loader('vue-loader-v16')
            .end()
            .use('vue-svg-loader')
            .loader('vue-svg-loader')
            .options({
                svgo: {
                    plugins: [
                        {
                            convertColors: {
                                currentColor: true
                            },
                            addAttributesToSVGElement: {
                                attributes: {
                                    fill: 'currentColor'
                                }
                            }
                        }
                    ]
                }
            });
    }
};
