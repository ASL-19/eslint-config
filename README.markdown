# @asl-19/eslint-config

Shared ESLint config for [ASL19](https://asl19.org/) projects.

This config replaces [@asl-19/eslint-config-typescript] and [@asl-19/eslint-config-typescript-react].

[@asl-19/eslint-config-typescript]: https://github.com/ASL-19/eslint-config-typescript
[@asl-19/eslint-config-typescript-react]: https://github.com/ASL-19/eslint-config-typescript-react

- [How to use](#how-to-use)
    - [Install](#install)
    - [Add to ESLint config](#add-to-eslint-config)
        - [For TypeScript projects:](#for-typescript-projects)
        - [For TypeScript + React projects:](#for-typescript--react-projects)
- [Compatibility](#compatibility)

## How to use

### Install

```sh
yarn add @asl-19/eslint-config --dev
```

### Add to ESLint config

#### For TypeScript projects:

Create a `.eslintrc.js` containing (at least) the following:

```js
// Workaround for https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "@asl-19/eslint-config"
  ],
};
```

#### For TypeScript + React projects:

Create a `.eslintrc.js` containing (at least) the following:

```js
// Workaround for https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "@asl-19/eslint-config",
    "@asl-19/eslint-config/react"
  ],
};
```

## Compatibility

This package is developed and used with Node.js 12 (the active LTS [release](https://nodejs.org/en/about/releases/) as of 2020-07). The code should be forward-compatible, but use with newer Node.js versions is untested and unsupported.
