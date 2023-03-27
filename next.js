/** @type {import("eslint").ESLint.ConfigData} */
const eslintConfigNext = {
  extends: ["plugin:@next/next/recommended"],
  plugins: ["react-memo"],
  rules: {
    // Disabled since we always use routeUrls functions for links
    "@next/next/no-html-link-for-pages": "off",
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
