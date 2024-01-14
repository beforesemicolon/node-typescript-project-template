module.exports = {
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    // change to Node if you don't need DOM
    testEnvironment: 'jsdom',
    testRegex: './src/.*\\.(test|spec)?\\.(js|ts)$',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    roots: ['<rootDir>/src'],
}
