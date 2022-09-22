const pluginSortImports = require("@trivago/prettier-plugin-sort-imports");
const pluginTailwindcss = require("prettier-plugin-tailwindcss");

/** @type {import("prettier").Parser}  */
const sortImportsAndClassesParser = {
  ...pluginSortImports.parsers.typescript,
  parse: pluginTailwindcss.parsers.typescript.parse,
};

/** @type {import("prettier").Plugin}  */
const sortImportsAndClassesPlugin = {
  parsers: {
    typescript: sortImportsAndClassesParser,
  },
};

module.exports = {
  plugins: [sortImportsAndClassesPlugin],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
