// https://eslint.org/docs/user-guide/configuring

module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  // add your custom rules here
  rules: {
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
  },
};
