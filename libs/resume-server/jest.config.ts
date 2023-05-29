export default {
  displayName: 'resume-server-data-access',
  globals: {},
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }]
  },
  moduleFileExtensions: ['ts', 'js'],
  coverageDirectory: '../../tmp/coverage/libs/resume-server',
  preset: '../../jest.preset.js'
};
