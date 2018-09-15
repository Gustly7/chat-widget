//import { dbClass } from './classes/dbClass.js';
let dbClass = require("./classes/dbClass.js");

let q = new dbClass.dbClass();

q.getUsers().then(e => {
  console.log(e);
})

myFunc = function (p) {
  console.log(p);
}

//Вызов слушателя в другом потоке
setTimeout(function () {q.dbCollectionListener('main', myFunc)}, 1);

//Вызов в основном потоке
q.dbCollectionListener('users', myFunc);