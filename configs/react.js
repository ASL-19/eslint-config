import eslintReact from "@eslint-react/eslint-plugin";
import jsxA11y from "eslint-plugin-jsx-a11y-x";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import globals from "globals";

// The inverse of @eslint-react's disable-conflict-eslint-plugin-react-hooks
// config: rather than turning off eslint-plugin-react-hooks' versions of the
// rules both plugins have, turn off @eslint-react's. Most of
// eslint-plugin-react-hooks' rules report React Compiler's own diagnostics, and
// the rest (rules-of-hooks and exhaustive-deps) are maintained by the React
// team.
//
// Derived from the upstream config's rule list so it stays in sync, skipping
// any rule @eslint-react doesn't define (ESLint errors on unknown rules, even
// when they're off).
/** @type {import("eslint").Linter.Config} */
const disableEslintReactRulesWithOverlappingReactHooksRules = {
  name: "@asl-19/eslint-config/disable-eslint-react-rules-with-overlapping-react-hooks-rules",
  rules: Object.fromEntries(
    Object.keys(
      eslintReact.configs["disable-conflict-eslint-plugin-react-hooks"].rules ??
        {},
    )
      .map((ruleName) => ruleName.replace(/^react-hooks\//, ""))
      .filter((ruleName) => Object.hasOwn(eslintReact.rules ?? {}, ruleName))
      .map((ruleName) => [`@eslint-react/${ruleName}`, "off"]),
  ),
};

const reactConfig = defineConfig({
  extends: [
    // Requires type information, so must be used with the typescript config
    eslintReact.configs["strict-type-checked"],
    disableEslintReactRulesWithOverlappingReactHooksRules,
    jsxA11y.configs.recommended,
    reactHooks.configs.flat["recommended-latest"],
  ],
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
  rules: {
    "@eslint-react/dom-no-unknown-property": ["error", { ignore: ["css"] }],
    "jsx-a11y-x/click-events-have-key-events": "off",
  },
});

export default reactConfig;
