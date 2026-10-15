import { defineConfig, globalIgnores } from "eslint/config";

import asl19 from "./index.js";

const eslintConfig = defineConfig([
  globalIgnores(["tests/fixtures/", "types/"]),
  {
    extends: [asl19.base, asl19.typescript],
  },
]);

export default eslintConfig;
