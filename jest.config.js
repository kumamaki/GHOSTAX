module.exports = {
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  collectCoverageFrom: [
    '*.js'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  }
};
