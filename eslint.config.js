import { defineConfig, globalIgnores } from "eslint/config";

import asl19 from "./index.js";

const eslintConfig = defineConfig([
  globalIgnores(["**/types/**/*.d.ts"]),
  {
    extends: [asl19.base, asl19.typescript],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.config.js"],
        },
        tsconfigRootDir: process.cwd(),
      },
    },
    rules: {
      "@typescript-eslint/no-unsafe-assignment": "off",
    },
  },
]);

export default eslintConfig;
