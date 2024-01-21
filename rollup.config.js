import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
    {
        input: 'src/index.ts',
        output: [
        {
            file: "dist/index.js",
            format: 'cjs',
            sourcemap: false,
        },
        {
            file: "dist/esm/index.js",
            format: 'esm',
            sourcemap: false,
        },
        ],
        plugins: [
            commonjs({
                include: ['node_modules/**'],
            }),
            typescript({
                tsconfig: './tsconfig.json',
                exclude: ['**/__tests__/**'],
            }),
        ],
        external: ['react', 'react-dom'],
    },
    // {
    //     input: 'dist/cjs/types/index.d.ts',
    //     output: [{ file: 'dist/cjs/index.d.ts', format: 'cjs' }],
    //     plugins: [dts()],
    // },
    // {
    //     input: 'dist/esm/types/index.d.ts',
    //     output: [{ file: 'dist/esm/index.d.ts', format: 'esm' }],
    //     plugins: [dts()],
    // },
];
