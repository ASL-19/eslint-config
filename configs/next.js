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
]);

export default nextConfig;
