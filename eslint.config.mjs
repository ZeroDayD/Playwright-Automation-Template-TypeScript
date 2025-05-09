import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import playwright from 'eslint-plugin-playwright';

/** @type {import("eslint").Linter.FlatConfig} */
export default [
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser,
            sourceType: 'module',
            ecmaVersion: 'latest'
        },
        plugins: {
            '@typescript-eslint': eslintPluginTs,
            playwright
        },
        rules: {
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            '@typescript-eslint/no-unused-vars': ['warn']
        }
    }
];
