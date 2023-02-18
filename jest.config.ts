const { getJestProjects } = require('@nrwl/jest');

export default {
  coverageDirectory: './tmp/coverage',
  coverageReporters: ['json', 'html', 'text'],
  moduleFileExtensions: ['ts', 'js', 'html'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './tmp/results',
        filename: 'index.html',
        expand: false,
        hideIcon: true,
        pageTitle: 'Results'
      }
    ]
  ],
  resolver: '@nrwl/jest/plugins/resolver',
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|html)$': 'jest-preset-angular'
  },
  verbose: false,
  projects: [...getJestProjects(), '<rootDir>']
};
