import next from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";

const nextConfig = defineConfig([
  {
    plugins: {
      "@next/next": next,
    },
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
