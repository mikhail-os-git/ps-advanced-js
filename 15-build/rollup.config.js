import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
// import { terser } from 'rollup-plugin-terser';

export default {
  input: 'scripts/app.js',
  output: {
    file: 'src/bundle.js',
    format: 'iife',
    name: 'MyApp',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      presets: ['@babel/preset-env'],
      plugins: ['@babel/plugin-transform-runtime'],
      babelHelpers: 'runtime',
    })
		// ,
    // terser(),
  ],
};
