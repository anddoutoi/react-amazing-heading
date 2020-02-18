import babel from 'rollup-plugin-babel';
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

import pkg from './package.json';

export default {
  input: './src/index.js',
  output: [
    {
      exports: 'named',
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
  // this project uses rollup-plugin-peer-deps-external
  //external: Object.keys(pkg.peerDependencies),
  plugins: [
    /*
    @rollup/plugin-commonjs
    Some libraries expose ES modules that you can import as-is. But
    at the moment, the majority of packages on NPM are exposed as
    CommonJS modules instead. Until that changes, we need to convert
    CommonJS to ES2015 before Rollup can process them.

    The @rollup/plugin-commonjs plugin does exactly that.

    Note that @rollup/plugin-commonjs should go before other plugins
    that transform your modules — this is to prevent other plugins
    from making changes that break the CommonJS detection.
    */
    commonjs({
      exclude: './src/**',
    }),
    // @rollup/plugin-node-resolve
    // Teaches Rollup how to find external modules
    nodeResolve(),
    // rollup-plugin-peer-deps-external
    // Automatically externalize peerDependencies in a rollup bundle.
    babel({
      // only transpile our source code
      exclude: 'node_modules/**',
    }),
    // rollup-plugin-peer-deps-external
    // Automatically externalize peerDependencies in a rollup bundle.
    peerDepsExternal(),
  ],
};
