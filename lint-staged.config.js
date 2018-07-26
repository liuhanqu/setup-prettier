module.exports = {
  linters: {
    '**/*.{js,jsx,ts,tsx,css,vue}': [
      'eslint --fix',
      'prettier --write',
      'git add',
    ],
  },
};
