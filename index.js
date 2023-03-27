/** @type {import("eslint").ESLint.ConfigData} */
const eslintConfig = {
  env: {
    es2022: true,
    node: true,
  },
  extends: ["eslint:recommended", "eslint-config-prettier"],
  globals: {
    globalThis: "writable",
  },
  plugins: ["simple-import-sort", "sort-destructure-keys"],
  rules: {
    "no-console": [
      "error",
      { allow: ["error", "group", "groupEnd", "info", "table", "warn"] },
    ],
    "no-param-reassign": [
      "error",
      {
        ignorePropertyModificationsFor: [
          "acc", // for reducer accumulators
          "draft", // for Immer drafts
        ],
        props: true,
      },
    ],
    "no-restricted-imports": [
      "warn",
      {
        patterns: ["./", "../"],
      },
    ],
    "no-useless-rename": "warn",
    "object-shorthand": "warn",
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          // Default groups
          ["^\\u0000"],
          ["^@?\\w"],
          ["^[^.]"],
          ["^\\."],
          // Aliased local directories (due to tsconfig.json baseUrl)
          ["^src/.*"],
        ],
      },
    ],

    // -------------------------------------------
    // --- eslint-plugin-sort-destructure-keys ---
    // -------------------------------------------
    "sort-destructure-keys/sort-destructure-keys": "warn",
  },
  // eslint-disable-next-line sort-keys-fix/sort-keys-fix
  overrides: [
    {
      env: {
        jest: true,
      },
      files: ["**/*.test.ts", "**/*.test.tsx", "jest.setup.js"],
    },
  ],
};

module.exports = eslintConfig;
