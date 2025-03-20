# @asl-19/eslint-config

Shared ESLint config for [ASL19](https://asl19.org/) projects.

This config replaces [@asl-19/eslint-config-typescript] and [@asl-19/eslint-config-typescript-react].

[@asl-19/eslint-config-typescript]: https://github.com/ASL-19/eslint-config-typescript
[@asl-19/eslint-config-typescript-react]: https://github.com/ASL-19/eslint-config-typescript-react

- [How to use](#how-to-use)
  - [Install](#install)
  - [Add to ESLint config](#add-to-eslint-config)

## How to use

### Install

```sh
npm install @asl-19/eslint-config --save-dev
```

### Add to ESLint config

Create an `eslint.config.js` containing:

```js
import asl19 from "@asl-19/eslint-config";

const eslintConfig = defineConfig({
  extends: [
    asl19.base, // (for all projects)
    asl19.typescript, // (for TypeScript projects)
    asl19.react, // (for React projects)
    asl19.next, // (for Next.js projects)
  ],
});

export default eslintConfig;
```
