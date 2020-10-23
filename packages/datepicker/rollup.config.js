import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import strip from '@rollup/plugin-strip';
import analyze from 'rollup-plugin-analyzer';
import pkg from './package.json';

export default {
    input: './src/index.js',
    output: {
        exports: 'auto',
        format: 'esm',
        file: 'dist/datepicker.esm.js'
    },
    external: [
        /@babel\/runtime/,
        /core-js\/modules/,
        ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
        resolve({
        }),
        babel({
            exclude: '**/node_modules/**',
            extensions: ['js'],
            babelHelpers: 'runtime'
        }),
        strip({
            debugger: process.env.NODE_ENV !== 'development',
            functions: ['console.*', 'assert.*', 'debug', 'alert'],
            sourceMap: process.env.NODE_ENV !== 'development'
        }),
        terser(),
        analyze()
    ]
};
