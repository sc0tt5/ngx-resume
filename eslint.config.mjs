import angular from 'angular-eslint';
import nx from '@nx/eslint-plugin';
import tseslint from 'typescript-eslint';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  ...tseslint.configs.recommendedTypeChecked.map(config => ({
    ...config,
    files: ['apps/**/*.ts', 'libs/**/*.ts']
  })),
  {
    files: ['apps/**/*.ts', 'libs/**/*.ts'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  ...angular.configs.tsRecommended.map(config => ({
    ...config,
    files: ['**/*.ts']
  })),
  ...angular.configs.templateRecommended.map(config => ({
    ...config,
    files: ['**/*.html']
  })),
  {
    ignores: ['**/dist', '**/out-tsc', '**/tmp', '**/coverage']
  },
  {
    files: ['**/*.ts'],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'ngx-resume',
          style: 'kebab-case'
        }
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'res',
          style: 'camelCase'
        }
      ],
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: 'scope:resume-client',
              onlyDependOnLibsWithTags: [
                'scope:resume-client',
                'scope:resume-client-shared',
                'scope:resume-client-viewer',
                'scope:shared'
              ]
            },
            {
              sourceTag: 'scope:resume-client-viewer',
              onlyDependOnLibsWithTags: ['scope:resume-client-shared', 'scope:resume-client-viewer', 'scope:shared']
            },
            {
              sourceTag: 'scope:shared',
              onlyDependOnLibsWithTags: ['scope:shared']
            },
            {
              sourceTag: 'type:data-access',
              onlyDependOnLibsWithTags: ['type:data-access', 'type:util']
            },
            {
              sourceTag: 'type:ui',
              onlyDependOnLibsWithTags: ['type:ui', 'type:util']
            },
            {
              sourceTag: 'type:util',
              onlyDependOnLibsWithTags: ['type:util']
            }
          ]
        }
      ],
      'no-console': ['error', { allow: ['error', 'warn', 'log'] }]
    }
  },
  {
    files: ['libs/resume-client/viewer/feature/src/lib/components/**/*.component.ts'],
    rules: {
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'res',
          style: 'camelCase'
        }
      ]
    }
  },
  {
    files: ['**/*.html'],
    rules: {
      '@angular-eslint/template/banana-in-box': 'error',
      '@angular-eslint/template/eqeqeq': 'error',
      '@angular-eslint/template/no-negated-async': 'error'
    }
  }
];
