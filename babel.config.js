module.exports = {
    presets: [
        [
            '@vue/cli-plugin-babel/preset',
            {
                targets: {
                    esmodules: true
                },
                useBuiltIns: 'usage'
            }
        ]
    ],
    plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-export-namespace-from'
    ]
};
