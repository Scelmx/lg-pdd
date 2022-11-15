module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    warnOnUnsupportedTypeScriptVersion: false,
    sourceType: 'module'
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'arrow-parens': ['error', 'always'],
    'no-useless-return': 'error',
    'no-new-func': 0,
    'no-useless-escape': 0,
    'no-template-curly-in-string': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'none',
        ignoreRestSiblings: true
      }
    ],
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/type-annotation-spacing': ['error', 2],
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never']
  }
}
