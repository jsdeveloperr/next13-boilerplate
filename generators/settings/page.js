module.exports = {
  description: 'Create a new page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the route of the page?',
    },
  ],
  actions: [
    {
      type: 'add',
      path: '../pages/{{kebabCase name}}/index.tsx',
      templateFile: 'templates/pages/index.tsx.hbs',
    },
    // {
    //   type: 'add',
    //   path: '../tests/pages/{{pascalCase name}}.spec.tsx',
    //   templateFile: 'templates/pages/index.spec.tsx.hbs',
    // },
    // {
    //   type: 'add',
    //   path: '../styles/pages/{{pascalCase name}}.module.scss',
    //   templateFile: 'templates/pages/style.ts.hbs',
    // },
  ],
}
