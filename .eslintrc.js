module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    node: true
  },
  plugins: ['vue'],
  extends: [
    'plugin:vue/recommended',
  ],
  rules: {
    indent: ['error', 2],
    'no-param-reassign': ['error', { props: false }],
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
    'consistent-return': 'off',
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'no-underscore-dangle': 'off',
    'global-require': 'off',
    'prefer-promise-reject-errors': 'off',
    'function-paren-newline': 'off',
    'no-console': 'off',
    'prefer-arrow-callback': 'off',
    'func-names': 'off',
    'max-len': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/html-self-closing': 'off',
    'vue/attributes-order': 'off',
    'vue/require-prop-types': 'off'
  }
};
