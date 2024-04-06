module.exports = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(js|jsx)?$": "babel-jest"
    },
    moduleNameMapper: {
        "\.(c|le|sa)ss$": "<rootDir>/config/jest/__mocks__/styleMock.js"
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
}