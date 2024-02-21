module.exports = {
  root: true,
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:regexp/recommended',
    'plugin:sonarjs/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    curly: 'error',
    eqeqeq: 'error',
    'eslint-comments/no-unused-disable': 'error',
    'import/newline-after-import': 'error',
    'import/no-default-export': 'error',
    'no-trailing-spaces': 'error',
    'object-shorthand': 'error',
    'require-await': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        // Default grouping but treats src/ as first-party
        groups: [
          ['^\\u0000', '^node:', '^@?\\w', '^'],
          ['^src/', '^\\.'],
        ],
      },
    ],
  },
  ignorePatterns: ['.eslintrc.js', '**/coverage/*'],
}
