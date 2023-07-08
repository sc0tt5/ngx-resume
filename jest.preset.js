const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  coverageReporters: ['json-summary', 'json', 'html', 'text', 'lcov'],
  coveragePathIgnorePatterns: ['/node_modules/', '.html', '.mock.ts', '.module.ts', 'polyfills.ts', '.routes.ts'],
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
  resolver: '@nx/jest/plugins/resolver',
  snapshotFormat: { escapeString: true, printBasicPrototype: true },
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|html)$': 'jest-preset-angular'
  },
  verbose: false
};
