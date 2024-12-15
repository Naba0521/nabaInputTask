module.exports = {
  preset: "ts-jest", // Use ts-jest to handle TypeScript files
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Handle .ts/.tsx files
    "^.+\\.(js|jsx)$": "babel-jest", // Handle .js/.jsx files
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@testing-library)/)", // Ignore certain modules
  ],
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts", // Ensure the correct path here
  ],
};
