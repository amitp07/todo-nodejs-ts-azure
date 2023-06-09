module.exports = {
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testRegex: "\\.spec\\.ts$",
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
