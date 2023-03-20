require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import("eslint").ESLint.ConfigData} */
const eslintConfig = {
  extends: ["./index"],
  plugins: ["sort-keys-fix"],
  rules: {
    "sort-keys-fix/sort-keys-fix": [
      "warn",
      "asc",
      {
        caseSensitive: false,
        natural: true,
      },
    ],
  },
};

module.exports = eslintConfig;
