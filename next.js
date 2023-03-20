/** @type {import("eslint").ESLint.ConfigData} */
const eslintConfigNext = {
  extends: ["plugin:@next/next/recommended"],
  plugins: ["react-memo"],
  rules: {
    "@next/next/no-img-element": "off",
  },
  // eslint-disable-next-line sort-keys-fix/sort-keys-fix
  overrides: [
    {
      files: ["src/components/**/*"],
      rules: {
        "react/display-name": [
          "warn",
          {
            ignoreTranspilerName: true,
          },
        ],
        "react-memo/require-memo": "warn",
      },
    },
  ],
};

module.exports = eslintConfigNext;
