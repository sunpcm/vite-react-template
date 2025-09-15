// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',

  // 更新 transform 来处理 ts/tsx 文件
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },

  // 设置模块别名，匹配 tsconfig.json 和 vite.config.ts 中的 '@' -> 'src'
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(svg|png|jpg|jpeg|gif)$': '<rootDir>/src/__mocks__/fileMock.js',
    '^/(.*)$': '<rootDir>/public/$1',
  },

  // 在每次测试前运行的设置文件
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};