import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  verbose: true,
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs,ts,vue}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs,ts,vue}',
  ],
  /**
   * fixes: ReferenceError: Vue is not defined
   * @see https://test-utils.vuejs.org/migration/#vue-vue3-jest-jest-28
   */
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
  modulePaths: ['src'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.ts$': '<rootDir>/node_modules/ts-jest',
    '^.+\\.vue$': '<rootDir>/node_modules/@vue/vue3-jest',
    // '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    // '^(?!.*\\.(js|jsx|mjs|css|json|ts|tsx)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx|vue)$'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node', 'mjs', 'vue'],
};

export default config;
