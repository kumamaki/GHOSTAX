
import multiEntry from "rollup-plugin-multi-entry";
import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: './src/components/dropdownue.js',
  output: {
    name: 'Dropdoownue',
    exports: 'named',
    globals: {
      'vue': 'vue'
    }
  },
  plugins: [
    multiEntry(),
    buble({
      objectAssign: 'Object.assign'
    }),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    })
  ],
  external: ['vue']
};
