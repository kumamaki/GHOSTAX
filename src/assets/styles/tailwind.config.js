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
                'light': '#BDD2C3',
                'base': '#ACC7B4',
                'dark': '#8A9F90'
            },
            grayscale: {
                '100': '#FCFCFE',
                '200': '#FCFCFE',
                '300': '#B9BCC4',
                '400': '#969BA7',
                '500': '#969BA7',
                '600': '#50586C',
                '700': '#484F61',
                '800': '#303541',
                '900': '#20232B'
            }
        },
        lineHeight: {
            single: '1'
        },
        fontFamily: {
            body: 'Ropa Sans',
            title: 'Londrina Solid'
        },
        spacing: {
            '0-5': '4px',
            '1-5': '12px',
            '2-5': '20px',
            ...Array.from(Array(200).keys()).map((number) => {
                return `${number * 8}px`;
            })
        },
        boxShadow: {
            featureBox: '0 0 50px 0 rgb(255 255 255 / 10%)',
            focus: '0 0 0 4px #8A9F90'
        }
    },
    variants: {
    },
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    }
};
