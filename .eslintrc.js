const path = require('path');
const alias = {
    '/@root': path.resolve(__dirname, '.'),
    '/@src': path.resolve(__dirname, './src'),
    '/@core': path.resolve(__dirname, './src/components/core'),
    '/@page': path.resolve(__dirname, './src/components/page'),
    '/@images': path.resolve(__dirname, './src/assets/images'),
    '/@styles': path.resolve(__dirname, './src/assets/styles'),
    '/@helpers': path.resolve(__dirname, './src/helpers'),
    '/@icons': path.resolve(__dirname, './src/assets/svg-icons'),
    '/@router': path.resolve(__dirname, './src/router'),
    '/@packages': path.resolve(__dirname, './packages')
};

module.exports = {
    root: true,
    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@babel/eslint-parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        babelOptions: {
            configFile: path.resolve(__dirname, 'babel.config.js'),
            rootMode: 'upward'
        }
    },

    env: {
        node: true
    },

    extends: [
        'standard',
        'plugin:vue/vue3-recommended',
        'plugin:vue-types/recommended',
        'plugin:jest/all'
    ],

    plugins: ['vue', 'babel'],

    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'semi': ['error', 'always'],
        'indent': ['error', 4],
        'no-param-reassign': [
            'error',
            {
                props: false
            }
        ],
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'none',
                ignoreRestSiblings: false
            }
        ],
        'arrow-body-style': ['error', 'always'],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'comma-dangle': ['error', 'never'],
        'quote-props': ['error', 'consistent'],
        'consistent-return': 'off',
        'no-shadow': 'off',
        'no-prototype-builtins': 'off',
        'global-require': 'off',
        'function-paren-newline': 'off',
        'prefer-arrow-callback': 'off',
        'func-names': 'off',
        'max-len': 'off',
        'no-multiple-empty-lines': ['error', { 'max': 2 }],
        'import/no-absolute-path': 'off',
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 2,
                multiline: {
                    max: 2,
                    allowFirstLine: false
                }
            }
        ],
        'vue/array-bracket-spacing': 'error',
        'vue/arrow-spacing': 'error',
        'vue/brace-style': 'error',
        'vue/no-restricted-syntax': 'error',
        'vue/object-curly-spacing': ['error', 'always'],
        'vue/space-unary-ops': 'error',
        'vue/v-on-function-call': 'error',
        'vue/camelcase': 'error',
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: []
            }
        ],
        'vue/match-component-file-name': [
            'error',
            {
                extensions: ['vue'],
                shouldMatchCase: true
            }
        ],
        'vue/valid-v-bind-sync': 'error',
        'vue/component-tags-order': ['error', {
            'order': ['template', 'script', 'style']
        }],
        'jest/no-hooks': 'off',
        'jest/no-truthy-falsy': 'off'
    },

    settings: {
        'import/resolver': {
            'node': {
                'extensions': [
                    '.js',
                    '.vue',
                    '.css'
                ]
            },
            'eslint-import-resolver-custom-alias': {
                'alias': alias,
                'extensions': [
                    '.js',
                    '.vue',
                    '.css'
                ]
            }
        }
    },

    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
};
