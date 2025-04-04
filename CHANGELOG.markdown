# @asl-19/eslint-config changelog

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
