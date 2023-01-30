module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    parser: '@babel/eslint-parser'
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    strict: 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
