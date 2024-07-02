import { FlatCompat } from '@eslint/eslintrc';


const compat = new FlatCompat({
  baseDirectory: import.meta.url,
});

export default [
  {
    ignores: ['node_modules/**'],
  },
  ...compat.extends('airbnb-base', 'plugin:jest/all'),
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        jest: 'readonly',
      },
    },
    settings: {
      jest: {
        version: 29, // Specify your Jest version here
      },
    },
    rules: {
      'max-classes-per-file': 'off',
      'no-underscore-dangle': 'off',
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
      'jest/require-hook': 'off', // Disable the jest/require-hook rule
    },
  },
  {
    files: ['*.js'],
    ignores: ['babel.config.js'],
  },
];
