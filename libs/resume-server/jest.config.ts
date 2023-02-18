export default {
  displayName: 'resume-server-data-access',
  globals: {
    'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' }
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js'],
  coverageDirectory: '../../tmp/coverage/libs/resume-server',
  preset: '../../jest.preset.js'
};
