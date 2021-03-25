'use strict';

const user1 = {
  name: 'Paul',
  age: 35,
  weight: 96,
  height: 1.85,
  calculateBmi() {
    return (this.weight / this.height ** 2).toFixed(1);
  },

  sayHi() {
    return `Hello there! I'm ${this.name}. Nice to meet you!`;
  },

  showMeThis(param1, param2) {
    return 'My name is:' + this.name + ' --- ' + param1 + ' --- ' + param2;
  },

  testingThis() {
    console.log(this);
    setTimeout(() => console.log(this), 1000);
  },

  arrow: () => console.log(this),
};

// const func = user1.showMeThis.bind({ name: 'Johnny' });

// const o1 = {
//   name: 'O1',
//   func: user1.showMeThis,
// };

// console.log(o1.func(), user1.showMeThis());

// console.log(
//   o1.func.call(user1, 'unu', 'doi'),
//   user1.showMeThis.apply(o1, ['trei', 'patru']),
//   func('cinci', 'sase')
// );

// user1.testingThis();
// user1.arrow();

/**
 * This in a function is:
 * 1. This is determined at call time of the function (this is called execution context)
 *      - Whatever is left of the dot:  obj.func() => this === obj, remember the difference between having use strict and not having it
 *      - Whatever was set with call or apply
 *
 * 2. This is determined when defining the function (lexical this, declaration context)
 *      - Whatever was set with bind
 *      - In the case of arrow functions it is determined when declaring the function (taken from the current scope)
 */

/**
 * Getters and Setters
 */
const user2 = {
  fName: 'Paul',
  lName: 'Negoescu',
  _ascunsa: 'Nu ar trebui sa fiu accesata direct',

  // getter, fullName is a computed property
  get fullName() {
    return `${this.fName} ${this.lName}`;
  },

  //setter
  set fullName(value) {
    // array destructuring, into existing variables
    [this.fName, this.lName] = value.split(' ');
  },

  //   get ascunsa() {
  //     return this._ascunsa;
  //   },

  set ascunsa(val) {
    // logica complexa de validare a valorii care poate sa dea si erori etc.
    this._ascunsa = val;
  },
};

// user2.fullName = 'Popescu Ion';
// user2.ascunsa = 'test';

// console.log(user2.fullName, user2.ascunsa);

// const func = new Function('console.log("hello from function")');
// func();
// console.dir(user1.showMeThis);

// const o2 = new Object({
//   test: 'Paul',
// });

// console.log(o2);

// const s1 = new String('test');
// const s2 = 'test';
// console.log(s1.toString(), s2, s1.toString() === s2);

function User(config) {
  this.name = config.name;
  this.age = config.age;
  this.height = config.height;
  this.weight = config.weight;

  this.sayHi = function () {
    return `Hi, I'm ${this.name}`;
  };

  //   this.calculateBmi = function () {
  //     return 2;
  //   };
}

User.prototype.calculateBmi = function () {
  return (this.weight / this.height ** 2).toFixed(1);
};

const user3 = new User({ name: 'Paul', age: 35, height: 1.85, weight: 96 });
const user4 = new User({ name: 'John', age: 75, height: 1.65, weight: 70 });

console.log(user3.calculateBmi(), user4.calculateBmi());
