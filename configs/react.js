import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import globals from "globals";

const reactConfig = defineConfig({
  extends: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    jsxA11y.flatConfigs.recommended,
    react.configs.flat.recommended,
    react.configs.flat["jsx-runtime"],
    reactHooks.configs.flat["recommended-latest"],
  ],
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
  rules: {
    "jsx-a11y/click-events-have-key-events": "off",
    // https://github.com/jsx-eslint/eslint-plugin-react/issues/1848
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
});

export default reactConfig;
