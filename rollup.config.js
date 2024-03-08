import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const config = {
  input: './src/index.ts',
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    typescript(),
    // alias({
    //   entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    // }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      extensions,
      include: ['src/**/*'],
      babelHelpers: 'runtime',
    }),
    url(),
    svgr(),
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
};

export default config;
