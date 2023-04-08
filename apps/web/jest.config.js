// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './'
});

const customJestConfig = {
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    coverageReporters: [['lcov', { projectRoot: '../../' }], 'text'],
    setupFiles: ['<rootDir>/__tests__/mocks/setup-jest.js'],
    testMatch: ['**/**/*.test.*']
};

module.exports = createJestConfig(customJestConfig);
