/* eslint-disable @typescript-eslint/no-var-requires */
const { page, component, features } = require('./settings');

module.exports = function (plop) {
  plop.setGenerator('page', page);
  plop.setGenerator('ui/component', component);
  plop.setGenerator('features', features);
};
