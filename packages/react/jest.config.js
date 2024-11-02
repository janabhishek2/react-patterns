module.exports = {
    roots: ["<rootDir>/src"],
    testRegex: '.*\.(test|spec)\.(js|ts|jsx)$',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        ".*\.(css|sass|scss)": "<rootDir>/tests/__mocks__/styleMock.js"
    },
    testEnvironment: 'jsdom',
};
