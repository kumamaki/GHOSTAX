import multiEntry from 'rollup-plugin-multi-entry';
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
  input: './src/dropdown.js',
  output: [
    {
      name: 'dropdown',
      file: pkg.main,
      exports: 'named',
      format: 'es'
    },
    {
      name: 'dropdown',
      file: pkg.module,
      format: 'cjs'
    },
    {
      name: 'dropdown',
      file: pkg.browser,
      format: 'iife'
    }
  ],
  plugins: [
    multiEntry(),
    buble({
      objectAssign: 'Object.assign'
    }),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs(),
    terser()
  ],
  external: [
    ...Object.keys(pkg.dependencies || {})
  ]
};
