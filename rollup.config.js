import pkg from './package.json';
import multiEntry from "rollup-plugin-multi-entry";
import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

export default {
  input: './src/library/dropdownue.js',
  output: [
    {
      file: pkg.main,
      exports: 'named',
      format: 'es'
    },
    {
      file: pkg.module,
      format: 'cjs'
    },
    {
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
    terser()
  ],
  external: [
    ...Object.keys(pkg.dependencies || {})
  ]
};
