import { defineConfig } from "eslint/config";
import typescriptEslint from "typescript-eslint";

const typescriptConfig = defineConfig(
  {
    extends: [
      // Requires strictNullChecks (no-unnecessary-condition and
      // prefer-nullish-coalescing don't work without it)
      typescriptEslint.configs.strictTypeChecked,
      typescriptEslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
    },
    rules: {
      "@typescript-eslint/array-type": [
        "warn",
        {
          default: "generic",
        },
      ],
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
      "@typescript-eslint/no-confusing-void-expression": [
        "error",
        // Allow idiomatic event handlers like `(e) => setValue(e.target.value)`
        { ignoreArrowShorthand: true },
      ],
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-misused-promises": [
        "warn",
        // Prevent unfixable "Promise-returning function provided to attribute
        // where a void return was expected" warnings on DOM attributes (e.g.
        // <form> onSubmit and <button> onClick)
        //
        // https://typescript-eslint.io/rules/no-misused-promises/#checksvoidreturn
        { checksVoidReturn: { attributes: false } },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/prefer-nullish-coalescing": [
        "warn",
        // Ignore string primitives (so `emptyString || "fallback"` works)
        { ignorePrimitives: { string: true } },
      ],
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        // strictTypeChecked's options, but allowing numbers (e.g.
        // `${width}px`). Every option is listed because omitted ones default
        // to allowed.
        {
          allowAny: false,
          allowBoolean: false,
          allowNever: false,
          allowNullish: false,
          allowNumber: true,
          allowRegExp: false,
        },
      ],
    },
  },
  {
    files: ["*.cjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
);

export default typescriptConfig;
