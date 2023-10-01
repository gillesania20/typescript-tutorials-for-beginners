"use strict";
// Array
let array = ['one', 'two'];
let mixed = [43, 43, 'mystring'];
array.push('three');
mixed.unshift('string');
// Tuple
let myTuple = ['Lorenz', 25, false];
// Object
let myObj = {};
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Jimmy',
    albums: ['I', 'II', 'IV']
};
const greetGuitarist = (input1) => {
    return `Hello ${input1.name}!`;
};
let myVocalist = {
    name: 'Name one',
    albums: [1, 'two', 3]
};
// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to Javascript but something added to the language at runtime"
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(array);
console.log(mixed);
console.log(evh);
console.log(jp);
console.log(greetGuitarist(evh));
console.log(myVocalist);
console.log(Grade.U);
console.log(Grade.A);
