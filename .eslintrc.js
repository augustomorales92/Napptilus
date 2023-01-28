module.exports = {
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false, // <== ADD THIS
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
    env: {
      browser: true,
      node: true,
      es6: true,
      jest: true,
    }, 
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended"
    ],
    plugins: [
      "react",
      "react-hooks",
      "jsx-a11y",
    ],
    rules: {
      strict: 0,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }