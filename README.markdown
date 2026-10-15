# @asl-19/eslint-config

Shared ESLint config for [ASL19](https://asl19.org/) projects.

This config replaces [@asl-19/eslint-config-typescript] and [@asl-19/eslint-config-typescript-react].

[@asl-19/eslint-config-typescript]: https://github.com/ASL-19/eslint-config-typescript
[@asl-19/eslint-config-typescript-react]: https://github.com/ASL-19/eslint-config-typescript-react

- [How to use](#how-to-use)
  - [Install](#install)
  - [Add to ESLint config](#add-to-eslint-config)
- [Development](#development)

## How to use

### Install

Requires ESLint 10.

```sh
npm install @asl-19/eslint-config eslint --save-dev
```

### Add to ESLint config

Create an `eslint.config.js` containing:

```js
import asl19 from "@asl-19/eslint-config";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig({
  extends: [
    asl19.base, // (for all projects)
    asl19.typescript, // (for TypeScript projects)
    asl19.react, // (for React projects; requires asl19.typescript)
    asl19.next, // (for Next.js projects)
  ],
});

export default eslintConfig;
```

The `typescript` config uses typescript-eslint’s [`strictTypeChecked`](https://typescript-eslint.io/users/configs#strict-type-checked) rules, which need `strictNullChecks` (or `strict`) in the project’s `tsconfig.json`. We also recommend [`noUncheckedIndexedAccess`](https://www.typescriptlang.org/tsconfig/#noUncheckedIndexedAccess): without it, TypeScript assumes array elements and lookups by arbitrary key (e.g. in a `Record<string, T>`) always exist, so `no-unnecessary-condition` reports checks for missing ones as unnecessary.

```json
{
  "compilerOptions": {
    "noUncheckedIndexedAccess": true,
    "strict": true
  }
}
```

The `react` config uses [`@eslint-react/eslint-plugin`](https://eslint-react.xyz/) (its [`strict-type-checked`](https://eslint-react.xyz/docs/presets) preset, which needs the type information the `typescript` config sets up), [`eslint-plugin-jsx-a11y-x`](https://github.com/eslint-community/eslint-plugin-jsx-a11y-x) and [`eslint-plugin-react-hooks`](https://react.dev/reference/eslint-plugin-react-hooks).

## Development

This package uses [mise](https://mise.jdx.dev/) to manage the Node.js and [pinact](https://github.com/suzuki-shunsuke/pinact) versions (see [`mise.toml`](./mise.toml)). With mise [activated](https://mise.jdx.dev/getting-started.html#activate-mise) in your shell:

```sh
# Install Node.js and pinact
mise install
```

`mise.toml` only lists tools, so mise trusts it without `mise trust`. Keep it that way: adding `[env]`, `[hooks]` or `[tasks]` would let it run code when you `cd` into the folder.

`.npmrc` and `package.json` (`devEngines`, `allowScripts`) configure npm supply-chain gates: a one-day release-age window, approved install scripts only, and registry-only dependencies. See [AGENTS.md](./AGENTS.md#npm-supply-chain-gates) for details.

In this folder:

```sh
# Run tests in watch mode
npm test

# Generate TypeScript declarations into types
npm run build

# Install dependencies if needed, then type check, lint, check formatting,
# run tests, and lint package
npm run dev-lint-test
```

The tests lint the files in [`tests/fixtures`](./tests/fixtures) with each config, to check that every plugin works with the installed version of ESLint.

To check for updates to Node.js (in `mise.toml`), npm packages, and GitHub Actions (pinned to commit SHAs in [`.github/workflows`](./.github/workflows)):

```sh
npm run outdated

# Update GitHub Actions to the latest releases that are at least 7 days old
npm run pinact-update
```

To test changes in a project that uses `eslint-config`, use [yalc](https://github.com/wclr/yalc):

```sh
# In this folder: build, check, and publish to the local yalc store
npx yalc publish

# In the project: replace the project’s copy of eslint-config with the local version
npx yalc add @asl-19/eslint-config
```

After making further changes, run `npx yalc publish` again in this folder, then `npx yalc update @asl-19/eslint-config` in the project.

Don’t use `yalc push` (or `yalc publish --push`): it updates every project yalc has ever recorded installing the package in, not just the one you’re testing, and can leave the others with an `eslint-config` whose dependencies aren’t installed.

Once you’re finished testing run `npx yalc remove @asl-19/eslint-config` in the project, then run `npm install` to revert to the published copy of the package.
