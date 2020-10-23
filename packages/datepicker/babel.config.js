module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                'corejs': 3,
                'useBuiltIns': 'usage'
            }
        ]
    ],
    plugins: [
        '@babel/transform-runtime',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-export-namespace-from'
    ]
};
