# @asl-19/eslint-config changelog

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
