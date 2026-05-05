module.exports = {
    extends: [
        'stylelint-config-standard'
    ],
    plugins: [
        'stylelint-order',
        'stylelint-config-rational-order/plugin',
        'stylelint-no-unsupported-browser-features'
    ],
    rules: {
        'indentation': 4,
        'number-no-trailing-zeros': null,
        'value-keyword-case': null,
        'string-quotes': 'single',
        'no-duplicate-selectors': true,
        'color-hex-case': 'upper',
        'color-hex-length': 'long',
        'declaration-block-trailing-semicolon': 'always',
        'declaration-no-important': true,
        'declaration-colon-space-before': 'never',
        'property-no-vendor-prefix': true,
        'value-no-vendor-prefix': true,
        'number-leading-zero': 'never',
        'function-url-quotes': 'always',
        'font-weight-notation': null,
        'font-family-name-quotes': 'always-where-required',
        'comment-whitespace-inside': 'always',
        'at-rule-no-vendor-prefix': true,
        'rule-empty-line-before': 'always',
        'media-feature-range-operator-space-before': 'always',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-name-no-vendor-prefix': true,
        'media-feature-colon-space-before': 'never',
        'media-feature-colon-space-after': 'always',
        'block-no-empty': null,
        'declaration-colon-space-after': 'always-single-line',
        'property-no-unknown': null,
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'b',
                    'm',
                    'e',
                    'when',
                    'is',
                    'block',
                    'tailwind',
                    'apply',
                    'variants',
                    'responsive',
                    'screen'
                ]
            }
        ],
        'declaration-empty-line-before': 'never',
        'at-rule-empty-line-before': [
            'always',
            {
                ignore: ['first-nested', 'blockless-after-same-name-blockless'],
                ignoreAtRules: ['apply']
            }
        ],
        'plugin/no-unsupported-browser-features': [true, {
            'severity': 'warning'
        }]
    }
};
