/** @type {import('prettier').Config} */
const config = {
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  importOrder: ['^@root/(.*)$', '^@components/(.*)$', '^@hooks/(.*)$', '^@utils/(.*)$', '^public/(.*)$', '^[./]'],
  importOrderSortSpecifiers: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports'), require.resolve('prettier-plugin-tailwindcss')],
};

module.exports = config;
