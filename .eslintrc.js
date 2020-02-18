module.exports = {
  env: {
    es6: true
  },
  extends: ['react-app', 'plugin:prettier/recommended'],
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  plugins: [
    "react"
  ],
  rules: {
    'prettier/prettier': 'warn',
  },
};
