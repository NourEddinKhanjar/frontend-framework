import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve'
import pkg from './package.json';

export default {
    input: 'src/index.ts',

    external: [
        'path',
        'fs',
        'resolve',
        'rollup-pluginutils',
        'typescript'
    ],

    plugins: [
        typescript(),
        nodeResolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs()
    ],

    output: [
        {
            format: 'umd',
            name: "script.js",
            file: pkg.main
        }
    ]
};
