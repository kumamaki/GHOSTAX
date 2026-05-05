/* eslint-disable quote-props */
const path = require('path');
const tailwindcss = require('tailwindcss');
const postcssImport = require('postcss-import');

const onlyInProd = (plugin, options) => {
    if (process.env.NODE_ENV === 'production') {
        return {
            [plugin]: options
        };
    }
};

module.exports = {
    map: true,
    plugins: [
        postcssImport(),
        tailwindcss(path.resolve(__dirname, 'src/assets/styles/tailwind.config.js'))
    ]
};
