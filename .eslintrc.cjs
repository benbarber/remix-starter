/** @type {import('eslint').Linter.Config} */

const config = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "prettier",
  ],
};

module.exports = config;
