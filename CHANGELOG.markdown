# @asl-19/eslint-config changelog

### 1.0.0 [2026-10-15]

- **Breaking:** Require ESLint 10 (`eslint` peer dependency is now `^10.12.0`)
- **Breaking:** In the `react` config, replace [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react) and [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) (neither supports ESLint 10) with [`@eslint-react/eslint-plugin`](https://eslint-react.xyz/) and [`eslint-plugin-jsx-a11y-x`](https://github.com/eslint-community/eslint-plugin-jsx-a11y-x)
  - Rename `jsx-a11y/` rules to `jsx-a11y-x/` in `eslint-disable` comments and config overrides
  - `react/` rules have different names and coverage in `@eslint-react/` (see [Migrating from eslint-plugin-react](https://eslint-react.xyz/docs/migrating-from-eslint-plugin-react)); `@eslint-react` rules that duplicate `eslint-plugin-react-hooks` rules are turned off
  - Uses `@eslint-react`’s `strict-type-checked` preset, so the `react` config now requires type information (use it with the `typescript` config)
- **Breaking:** In the `typescript` config, use typescript-eslint’s [`strictTypeChecked`](https://typescript-eslint.io/users/configs#strict-type-checked) instead of `recommendedTypeChecked` (requires `strictNullChecks`), with two adjustments:
  - `no-confusing-void-expression` allows arrow function shorthand (e.g. `(e) => setValue(e.target.value)`)
  - `restrict-template-expressions` allows numbers
- Updated dependencies
- Development tooling:
  - Add Vitest tests that lint fixtures with each config, and a test that each npm supply-chain gate is set
  - Generate `types/` at build time instead of committing it
  - Replace npm-run-all with npm-run-all2, remove npm-check-updates, and add `outdated` scripts
  - Add publint to `lint-test`
  - Manage Node.js 24 and pinact with mise
  - Add npm supply-chain gates (`.npmrc`, `devEngines`, `allowScripts`)
  - Update TypeScript to 6.0 and Prettier to 3.9, and type check with `module: "nodenext"`
  - Pin GitHub Actions to commit SHAs, limit the workflow token to read-only, and run CI on pull requests
  - Add agent instructions (`AGENTS.md`) and Claude Code permission settings

### 0.11.0 [2026-03-22]

- Removed [`@arthurgeron/eslint-plugin-react-usememo`](https://github.com/arthurgeron/eslint-plugin-react-usememo) (mostly obsolete with React Compiler)
- Updated dependencies

### 0.10.0 [2026-03-11]

- Updated dependencies [[#23](https://github.com/ASL-19/eslint-config/pull/23)]

### 0.9.0 [2025-03-20]

- Adopt latest ESLint recommended rules

- Replace `eslint-plugin-simple-import-sort`, `eslint-plugin-sort-destructure-keys`, and `@typescript-eslint` ordering rules with `eslint-plugin-perfectionist`

- Replace unmaintained `eslint-plugin-react-memo` with maintained (and more powerful) `@arthurgeron/eslint-plugin-react-usememo`

- Remove obsolete `@rushstack/eslint-patch`

- Add `eslint-plugin-security`

- Add single export (`index.js` is now the barrel file; the rules previously in `index.js` are now in `asl19.base`)

- Project is now a pure ES module (won’t work with older versions of Node, but all consuming projects should be using Node 22+)

## 0.8.0 [2023-03-27]

### Changes

- Removed [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import)

  Didn’t often catch issues `tsc` didn’t already catch, and had large performance cost.

- Updated dependencies

## 0.7.1 [2023-03-21]

### Fixes

- Added missing `eslint-plugin-react-memo` dependency

## 0.7.0 [2023-03-20]

Big overhaul/update:

- Remove `eslint-plugin-functional` (we had to disable too much of it, and weren’t getting value from the remaining rules)
- Replace `@rushstack/eslint-config` and replace some of its configs with standard config recommended sets
- Remove `eslint-plugin-prettier` (we will use Prettier directly in projects now)
- Update dependencies, bring in some common project configs, etc.

## [0.6.0](https://github.com/ASL-19/eslint-config/pulls?q=is%3Apr+milestone%3A0.6.0) [2022-04-21]

### Changes

- Raised ESLint peer dependency "^8.13.0" [**Breaking**]
  - The previous ESLint dependency was 7
- Raised Prettier peer dependency to "^2.6.2". [**Breaking**]
- Upgraded other ESLint plugin/config dependencies (may result in new warnings/errors)

## [0.5.0](https://github.com/ASL-19/eslint-config/pulls?q=is%3Apr+milestone%3A0.5.0) [2021-11-01]

### Changes

- Add `next` config (`@asl-19/eslint-config/next`) [[#18](https://github.com/ASL-19/eslint-config/pull/18)]

  This loads [`@next/next/recommended`](https://github.com/vercel/next.js/blob/canary/packages/eslint-plugin-next/lib/index.js#L23) with the `@next/next/no-img-element` rule disabled (since the Next.js `<Image />` component it enforces the use of is problematic at the moment).

- Add new rules and plugins from recent projects [[#18](https://github.com/ASL-19/eslint-config/pull/18)]

## [0.4.0](https://github.com/ASL-19/eslint-config/pulls?q=is%3Apr+milestone%3A0.4.0) [2021-03-24]

### Changes

- Upgrade dependencies [[#6](https://github.com/ASL-19/eslint-config/pull/6)]
  - `eslint`, `prettier`, and `typescript` peer dependencies changed to most recent releases
  - No new rules added, but some minor warnings may be triggered by dependency rule tweaks

## [0.3.0](https://github.com/ASL-19/eslint-config/pulls?q=is%3Apr+milestone%3A0.3.0) [2020-10-21]

### Changes

- Upgrade dependencies, consolidate rules from internal projects (should remove redundant rules from project `.eslintrc.js` files after upgrading) [[#4](https://github.com/ASL-19/eslint-config/pull/4)]

## [0.2.0](https://github.com/ASL-19/eslint-config/pulls?q=is%3Apr+milestone%3A0.2.0) [2020-07-27]

### Additions

- Enable tsdoc/syntax rule [[#2](https://github.com/ASL-19/eslint-config/pull/2)]

## 0.1.0 [2020-07-27]

First release
