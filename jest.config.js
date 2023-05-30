module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/pages/**/*.ts(x)',
    '!src/styles/**/*.ts',
    '!src/types/**/*.ts'
  ],
  modulePaths: ['<rootDir>/.jest', '<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
