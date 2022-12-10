module.exports = {
  description: 'Creates a new features',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the features?',
    },
  ],
  actions: [
    {
      type: 'add',
      path: '../features/{{lowerCase name}}/api/index.ts',
      templateFile: 'templates/features/api/index.ts.hbs',
    },
    {
      type: 'addMany',
      destination: '../features/{{lowerCase name}}/components/{{pascalCase name}}Container',
      templateFiles: 'templates/features/components/*.hbs',
      base: 'templates/features/components',
    },
    {
      type: 'addMany',
      destination: '../features/{{lowerCase name}}/components',
      templateFiles: 'templates/features/index/*.hbs',
      base: 'templates/features/index',
    },
    {
      type: 'addMany',
      destination: '../features/{{lowerCase name}}/hooks',
      templateFiles: 'templates/features/hooks/*.hbs',
      base: 'templates/features/hooks',
    },
    {
      type: 'addMany',
      destination: '../features/{{lowerCase name}}/store',
      templateFiles: 'templates/features/store/*.hbs',
      base: 'templates/features/store',
    },
    {
      type: 'add',
      path: '../features/{{lowerCase name}}/types/index.ts',
      templateFile: 'templates/features/types/index.ts.hbs',
    },
    {
      type: 'add',
      path: '../features/{{lowerCase name}}/index.ts',
      templateFile: 'templates/features/index.ts.hbs',
    },
  ]
}
