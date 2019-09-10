module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: ['./src/assets/styles/variables/*.scss']
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
      .use('@vusion/md-vue-loader')
      .loader('@vusion/md-vue-loader')
      .end();
  }
};
