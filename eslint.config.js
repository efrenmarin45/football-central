import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react-x'
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended,
    tseslint.configs.recommended,
    react.configs.recommended, reactDom.configs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "react-x/no-class-component": "warn",
      "react-dom/no-dangerously-set-innerhtml": "warn",
    },
  },
)
