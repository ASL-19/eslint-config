import next from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";

const nextConfig = defineConfig([
  {
    plugins: {
      // @ts-expect-error - Next.js plugin types don't perfectly match ESLint flat config Plugin type
      "@next/next": next,
    },
    // @ts-expect-error - Rule types from Next.js plugin don't perfectly match ESLint RulesConfig
    rules: {
      ...next.configs.recommended.rules,
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "off",
    },
  },
  {
    files: ["src/components/**/*"],
    rules: {
      "@arthurgeron/react-usememo/require-memo": "warn",
      "react/display-name": [
        "warn",
        {
          ignoreTranspilerName: true,
        },
      ],
    },
  },
]);

export default nextConfig;
