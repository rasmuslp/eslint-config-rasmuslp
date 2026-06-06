import { RuleConfigSeverity } from '@commitlint/types';
import type { UserConfig } from '@commitlint/types';

const config: UserConfig = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'subject-case': [RuleConfigSeverity.Error, 'always', 'sentence-case'],
	},
};

export default config;
