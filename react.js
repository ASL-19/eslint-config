/** @type {import("eslint").ESLint.ConfigData} */
const eslintConfigReact = {
  env: {
    browser: true,
  },
  extends: [
    "plugin:jsx-a11y/strict",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["@emotion", "@mizdra/layout-shift", "react-memo"],
  rules: {
    // ------------------------------
    // --- @emotion/eslint-plugin ---
    // ------------------------------
    "@emotion/syntax-preference": ["error", "string"],

    // ----------------------------
    // --- @mizdra/layout-shift ---
    // ----------------------------
    "@mizdra/layout-shift/require-size-attributes": "error",

    // ------------------------------
    // --- eslint-plugin-jsx-a11y ---
    // ------------------------------
    "jsx-a11y/click-events-have-key-events": "off",
    // Deprecated and redundant due to jsx-a11y/label-has-associated-control
    // "jsx-a11y/label-has-for": "off",
    // Deprecated
    // "jsx-a11y/no-onchange": "off",

    // ---------------------------
    // --- eslint-plugin-react ---
    // ---------------------------
    // Disabled until https://github.com/jsx-eslint/eslint-plugin-react/issues/1848 is fixed
    "react/jsx-one-expression-per-line": "off",
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-memo/require-usememo": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

module.exports = eslintConfigReact;
