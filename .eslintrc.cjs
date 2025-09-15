// .eslintrc.cjs
module.exports = {
  // ... (root, env, extends)
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier', // <--- 添加这一行到末尾
  ],
  // ... (parser, plugins, rules)
};