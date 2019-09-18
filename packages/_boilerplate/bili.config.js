import pkg from './package.json';

export default {
  input: './src/pagination.js',
  output: {
    moduleName: 'Pagination',
    minify: true,
    format: [
      'cjs',
      'umd',
      'esm',
      'iife'
    ],
    dir: 'dist'
  },
  externals: [
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: {
    commonjs: true,
    'node-resolve': {
      browser: true,
      preferBuiltins: false
    },
    strip: {
      debugger: true,
      functions: ['console.*', 'assert.*', 'debug', 'alert'],
      sourceMap: true
    }
  }
};
