module.exports = {
    purge: [
        './src/**/*.vue'
    ],
    theme: {
        extend: {
            height: {
                'almost-screen': 'calc(100vh - 64px)'
            }
        },
        colors: {
            primary: {
                '50': '#fcfcfa',
                '100': '#faf0ef',
                '200': '#f6cfdf',
                '300': '#eaa3be',
                '400': '#d27596',
                '500': '#d75078',
                '600': '#bf3658',
                '700': '#972940',
                '800': '#6c1c2a',
                '900': '#421217'
            },
            grayscale: {
                '100': '#fefefe',
                '200': '#dddee1',
                '300': '#bcbdc3',
                '400': '#9b9da6',
                '500': '#9b9da6',
                '600': '#7a7d89',
                '700': '#5a5d6c',
                '800': '#393d4e',
                '900': '#181d31'
            }
        },
        lineHeight: {
            single: '1',
            comfortable: '1.618'
        },
        fontFamily: {
            brand: 'Londrina',
            body: 'TextaAlt',
            title: 'TextaAlt',
            mono: 'Ubuntu mono'
        },
        fontWeight: {
            hair: 100,
            thin: 200,
            light: 300,
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            heavy: 800,
            black: 900
        },
        spacing: {
            '0': 0,
            '1px': '1px',
            '2px': '2px',
            '0-5': '4px',
            '1-5': '12px',
            '2-5': '20px',
            ...Array.from(Array(200).keys()).map((number) => {
                return `${number * 8}px`;
            })
        },
        boxShadow: {
            primary: '0 3px 16px rgb(138 159 144 / 50%)',
            featureBox: '0 0 50px 0 rgb(255 255 255 / 10%)',
            focus: '0 0 0 4px #8A9F90',
            normal: '0 20px 30px 0 rgb(0 0 0 / 30%)'
        },
        typography: (theme) => {
            return {
                DEFAULT: {
                    css: {
                        'color': theme('colors.grayscale.300'),
                        'font-weight': theme('fontWeight.medium'),
                        'font-family': theme('fontFamily.body'),
                        'h1': {
                            'font-weight': theme('fontWeight.black'),
                            'line-height': '1',
                            'font-size': theme('fontSize.3xl'),
                            'color': theme('colors.grayscale.100')
                        },
                        'h2': {
                            'font-weight': theme('fontWeight.black'),
                            'font-size': theme('fontSize.2xl'),
                            'color': theme('colors.grayscale.100')
                        },
                        'h3': {
                            'font-weight': theme('fontWeight.black'),
                            'font-size': theme('fontSize.xl'),
                            'color': theme('colors.grayscale.100')
                        },
                        'p': {
                            'margin': `${theme('spacing.3')} 0`
                        },
                        'ul': {
                            'list-style': 'disc',
                            'list-style-position': 'outside',
                            'padding-left': theme('spacing.5'),
                            'margin': `${theme('spacing.3')} 0 ${theme('spacing.3')} 0`
                        },
                        'ul > li': {
                            'margin-bottom': theme('spacing.0-5'),
                            '&::marker': {
                                'color': theme('colors.primary.DEFAULT')
                            }
                        }
                    }
                }
            };
        }
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
    variants: {
    },
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    }
};
