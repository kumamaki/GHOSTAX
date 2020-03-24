module.exports = {
    presets: [
        [
            '@vue/app', {
                useBuiltIns: 'entry'
            }
        ]
    ],
    plugins: [
        '@babel/plugin-proposal-optional-chaining',
        ['prismjs', {
            languages: ['javascript', 'css', 'markup'],
            plugins: ['line-numbers']
        }]
    ]
};
