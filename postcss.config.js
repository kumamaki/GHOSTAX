/* eslint-disable quote-props */
const isProductionLike = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging';
const onlyInProd = (plugin, options) => {
    if (isProductionLike) {
        return {
            [plugin]: options
        };
    }
};

module.exports = {
    map: true,
    plugins: {
        'postcss-import': {},
        'postcss-preset-env': {
            autoprefixer: false
        },
        'tailwindcss': './node_modules/~styles/tailwind.config.js',
        ...onlyInProd('cssnano', {
            preset: 'default'
        }),
        autoprefixer: {}
    }
};
