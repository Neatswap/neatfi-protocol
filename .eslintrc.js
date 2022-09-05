module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:mocha/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'mocha',
  ],
  rules: {
    'mocha/no-mocha-arrows': 0,
    indent: ['error', 2],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-shadow': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        'ts': 'never',
      },
   ],
  },
};
