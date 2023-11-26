module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
  moduleNameMapper: {
    // Viteのパスエイリアスに対応する場合は、ここにマッピングを追加
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // テストを実行するファイルのパターンを指定
  testMatch: ["**/*.test.tsx"],
};
