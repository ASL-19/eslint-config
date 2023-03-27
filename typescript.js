/** @type {import("eslint").ESLint.ConfigData} */
const eslintConfigTypeScript = {
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: process.cwd(),
  },
  rules: {
    // ---------------------------------------
    // --- @typescript-eslint/eslint-plugin ---
    // ----------------------------------------
    "@typescript-eslint/array-type": [
      "warn",
      {
        default: "generic",
      },
    ],
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          // See https://github.com/typescript-eslint/typescript-eslint/issues/2063#issuecomment-675156492
          //
          // We allow this because we often have harmless empty placeholder
          // types like `type HomePageQuery = {}`
          "{}": false,
        },
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    "@typescript-eslint/member-ordering": [
      "warn",
      {
        default: {
          memberTypes: ["signature", "field"],
          order: "alphabetically",
        },
      },
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-namespace": [
      "warn",
      {
        allowDefinitionFiles: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-var-requires": "off",
  },
};

module.exports = eslintConfigTypeScript;
