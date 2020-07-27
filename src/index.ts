const eslintConfig = {
  extends: [
    "@rushstack/eslint-config",
    "plugin:functional/external-recommended",
    "plugin:functional/lite",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  parserOptions: { ecmaVersion: 2019, sourceType: "module" },
  plugins: [
    "functional",
    "import",
    "simple-import-sort",
    "sort-destructure-keys",
  ],
  rules: {
    "@rushstack/no-null": "off",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/typedef": "off",

    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "acc", // for reducer accumulators
          "draft", // for Immer drafts
        ],
      },
    ],
    "no-restricted-imports": [
      "warn",
      {
        patterns: ["./", "../"],
      },
    ],

    "functional/prefer-readonly-type": "off",
    "functional/prefer-type-literal": "off",
    "import/no-unresolved": [
      "warn",
      {
        ignore: ["!url-loader!"],
      },
    ],
    "prettier/prettier": "warn",
    "simple-import-sort/sort": [
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
    "sort-destructure-keys/sort-destructure-keys": "warn",
    "tsdoc/syntax": "warn",
  },
  settings: {
    // "import/ignore": ["!url-loader!"],
    "import/resolver": {
      typescript: {},
    },
  },
};

export = eslintConfig;
