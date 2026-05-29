import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginOxlint from 'eslint-plugin-oxlint'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,ts,tsx}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        __APP_VERSION__: 'readonly',
      },
    },
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // Allow incremental flex
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    }
  },

  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),
])
