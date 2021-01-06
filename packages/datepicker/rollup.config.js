import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import sourcemaps from 'rollup-plugin-sourcemaps';
import del from 'rollup-plugin-delete';
import strip from '@rollup/plugin-strip';
import analyze from 'rollup-plugin-analyzer';
import pkg from './package.json';

export default {
    input: './src/index.js',
    output: [
        {
            exports: "named",
            format: 'esm',
            file: `dist/${pkg.packageName}.esm.js`,
            name: `${pkg.packageName}.esm.js`,
            sourcemap: process.env.NODE_ENV === 'development' ? 'inline' : false,
        },
        {
            format: 'cjs',
            exports: "named",
            file: `dist/${pkg.packageName}.cjs.js`,
            name: `${pkg.packageName}.cjs.js`,
            sourcemap: process.env.NODE_ENV === 'development' ? 'inline' : false
        }
    ],
    external: [
        /@babel\/runtime/,
        /core-js\/modules/,
        ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
        del({ targets: 'dist/*' }),
        resolve(),
        babel({
            exclude: '**/node_modules/**',
            extensions: ['js'],
            babelHelpers: 'runtime'
        }),
        strip({
            debugger: process.env.NODE_ENV !== 'development',
            functions: process.env.NODE_ENV === 'development' ? [] : ['console.*', 'assert.*', 'debug', 'alert'],
            sourceMap: process.env.NODE_ENV !== 'development'
        }),
        process.env.NODE_ENV !== 'development' ? terser() : null,
        process.env.NODE_ENV === 'development' ? sourcemaps() : null,
        analyze()
    ]
};
