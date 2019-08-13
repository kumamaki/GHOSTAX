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
  }
};
