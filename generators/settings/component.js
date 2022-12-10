module.exports = {
    description: 'Creates a new ui component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the ui component?',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: '../libs/ui/components/{{pascalCase name}}',
        templateFiles: 'templates/components/*.hbs',
        base: 'templates/components',
      },
    ]
  }
