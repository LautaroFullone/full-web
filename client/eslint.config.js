import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
   pluginJs.configs.recommended,
   ...tseslint.configs.recommended,
   pluginReact.configs.flat.recommended,
   eslintPluginPrettierRecommended,
   {
      settings: {
         react: {
            version: 'detect',
         },
      },
   },
   {
      files: ['/client/**/*.{js,mjs,cjs,ts,jsx,tsx}'],
   },
   {
      languageOptions: { globals: globals.browser },
   },
   {
      rules: {
         '@typescript-eslint/no-unused-vars': 'off',
         'no-unused-vars': 'error',
         'react/react-in-jsx-scope': 'off',
         'no-console': 'warn',
         eqeqeq: 'error',
         camelcase: 'error',
         quotes: ['error', 'single'],
         semi: ['error', 'never'],
         curly: 'off',
      },
   },
]
