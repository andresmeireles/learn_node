// MODULES
// para buscar um modulo ele precisa ter algo exportado dentro de seu arquivo, seja por meio de 
// module.exports {} ou export default {}
// para usar a notação de ES6 precisamos usar o npm
const sayHi = require('./module_func');
const person = require('./other_import_modules');

sayHi('André');
sayHi('Yasmim');
sayHi('Tatu');
sayHi(person.aPerson.name);
sayHi(person.items[0]);
sayHi(person.items[1]);