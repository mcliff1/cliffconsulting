const react = require('eslint-plugin-react');
const globals = require('globals');

module.exports = [
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: require("@typescript-eslint/parser"),
      parserOptions: {
        requireConfigFile: false,
        ecmaFeatures: {
          jsx: true
        }
      },
      "globals": {
        browser: true,
        es2021: true
      }
    },
    plugins: {
      react: require("eslint-plugin-react"),
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin")
    },
    settings: {
      react: {
        version: "18.0"
      }
    },
    rules: {
      // Your custom rules
    }
  }
];