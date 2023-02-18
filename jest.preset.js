const nxPreset = require('@nrwl/jest/preset').default;

module.exports = {
  ...nxPreset,
  coverageReporters: ['json'],
  coveragePathIgnorePatterns: ['/node_modules/', '.html', '.mock.ts', '.module.ts', 'polyfills.ts', '.routes.ts']
};
