const eslintConfigReact = {
  extends: [
    "@rushstack/eslint-config/react",
    "plugin:jsx-a11y/strict",
    "plugin:react-hooks/recommended",
    "prettier/react",
  ],
  rules: {
    // Via https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/402#issuecomment-368305051
    // Required until https://github.com/zeit/next.js/issues/5533 is resolved
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    // Deprecated and redundant due to jsx-a11y/label-has-associated-control
    "jsx-a11y/label-has-for": "off",
    // Disabled until https://github.com/yannickcr/eslint-plugin-react/issues/1848 is fixed
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
};

export = eslintConfigReact;
