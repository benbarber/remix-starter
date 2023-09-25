/** @type {import("prettier").Config} */

const config = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default config;
