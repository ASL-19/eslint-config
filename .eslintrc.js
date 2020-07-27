require("@rushstack/eslint-patch/modern-module-resolution");

const eslintConfig = {
  extends: ["./index"],
};

// eslint-disable-next-line functional/immutable-data
module.exports = eslintConfig;
