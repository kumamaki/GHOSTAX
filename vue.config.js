const path = require('path');

module.exports = {
  css: {
    loaderOptions : {
      sass: {
        data: `@import "src/assets/styles/variables/color-pallete.scss";`
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      'patterns': [
        path.resolve(__dirname, 'src/assets/styles/variables/*.scss')
      ]
    }
  }
}
