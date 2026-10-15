import { ESLint, type Linter } from "eslint";
import { describe, expect, it } from "vitest";

import asl19 from "../index.js";

// Lint the fixtures in tests/fixtures (which deliberately break rules) with
// each config, to make sure each config loads, its plugins run without crashing
// on the current ESLint version, and representative rules fire. Paths are
// relative to the package root, where npm scripts and Vitest run.

const lintFixture = async (
  fixture: string,
  configs: Array<Array<Linter.Config>>,
) => {
  const eslint = new ESLint({
    // The fixtures are ignored by this package's own eslint.config.js
    overrideConfig: configs.flat(),
    overrideConfigFile: true,
  });

  const [result] = await eslint.lintFiles([`tests/fixtures/${fixture}`]);

  if (!result) {
    throw new Error(`No lint result for ${fixture}`);
  }

  return {
    fatalMessages: result.messages.filter((message) => message.fatal),
    getRuleLines: (ruleId: string) =>
      result.messages
        .filter((message) => message.ruleId === ruleId)
        .map((message) => message.line),
    getRuleSeverities: (ruleId: string) =>
      result.messages
        .filter((message) => message.ruleId === ruleId)
        .map((message) => message.severity),
    ruleIds: new Set(result.messages.map((message) => message.ruleId)),
    usedDeprecatedRules: result.usedDeprecatedRules,
  };
};

describe("configs", () => {
  it("base", async () => {
    const {
      fatalMessages,
      getRuleLines,
      getRuleSeverities,
      usedDeprecatedRules,
    } = await lintFixture("base.js", [asl19.base]);

    expect(fatalMessages).toEqual([]);
    expect(usedDeprecatedRules).toEqual([]);
    // console.log but not console.info
    expect(getRuleLines("no-console")).toEqual([3]);
    // Perfectionist's recommended rules are downgraded to warnings
    expect(getRuleSeverities("perfectionist/sort-objects")).toEqual([1]);
  });

  it("typescript", async () => {
    const { fatalMessages, getRuleLines, ruleIds, usedDeprecatedRules } =
      await lintFixture("typescript.ts", [asl19.base, asl19.typescript]);

    expect(fatalMessages).toEqual([]);
    expect(usedDeprecatedRules).toEqual([]);
    expect(ruleIds).toContain("@typescript-eslint/array-type");
    expect(ruleIds).toContain("@typescript-eslint/consistent-type-definitions");
    // Requires type information
    expect(ruleIds).toContain("@typescript-eslint/no-floating-promises");
    // From strictTypeChecked
    expect(ruleIds).toContain("@typescript-eslint/no-unnecessary-condition");
    // Reports the nullable value but not the number
    expect(
      getRuleLines("@typescript-eslint/restrict-template-expressions"),
    ).toEqual([14]);
    expect(ruleIds).not.toContain(
      "@typescript-eslint/no-confusing-void-expression",
    );
  });

  it("react", async () => {
    const { fatalMessages, ruleIds, usedDeprecatedRules } = await lintFixture(
      "react.tsx",
      [asl19.base, asl19.typescript, asl19.react],
    );

    expect(fatalMessages).toEqual([]);
    expect(usedDeprecatedRules).toEqual([]);
    expect(ruleIds).toContain("@eslint-react/no-missing-key");
    expect(ruleIds).toContain("jsx-a11y-x/alt-text");
    expect(ruleIds).toContain("react-hooks/rules-of-hooks");
    // From @eslint-react's strict-type-checked
    expect(ruleIds).toContain("@eslint-react/dom-no-missing-button-type");
    expect(ruleIds).toContain("@eslint-react/no-leaked-conditional-rendering");
    // Turned off in favour of eslint-plugin-react-hooks
    expect(ruleIds).not.toContain("@eslint-react/rules-of-hooks");
    // css prop is allowed
    expect(ruleIds).not.toContain("@eslint-react/dom-no-unknown-property");
  });

  it("next", async () => {
    const { fatalMessages, ruleIds, usedDeprecatedRules } = await lintFixture(
      "next.tsx",
      [asl19.base, asl19.typescript, asl19.react, asl19.next],
    );

    expect(fatalMessages).toEqual([]);
    expect(usedDeprecatedRules).toEqual([]);
    expect(ruleIds).toContain("@next/next/no-sync-scripts");
    // Turned off
    expect(ruleIds).not.toContain("@next/next/no-img-element");
  });
});
