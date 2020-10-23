module.exports = {
    root: true,
    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2019,
        sourceType: 'module'
    },

    env: {
        node: true
    },

    extends: [
        '@vue/airbnb',
        'plugin:vue/vue3-recommended',
        'plugin:jest/all',
        'plugin:json/recommended'
    ],

    plugins: ['vue', 'babel', 'import'],

    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
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
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true
            }
        ],
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
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
        'vue-types/namespace': ['VT']
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
