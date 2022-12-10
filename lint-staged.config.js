module.exports = {
  '*.{js,jsx,ts,tsx}': () => ['pnpm lint:fix', 'pnpm lint'],
  '**/*.ts?(x)': () => 'pnpm check',
  '*.+(js|jsx|ts|tsx|json|css|md|mdx)': ['prettier --write'],
};
