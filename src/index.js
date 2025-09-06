// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import gitignore from 'eslint-config-flat-gitignore';
import tseslint from 'typescript-eslint';

export default defineConfig(
	gitignore(),
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
	{
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
);
