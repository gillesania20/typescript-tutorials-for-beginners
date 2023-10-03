"use strict";
// Literal types
let myName;
let userName;
userName = 'John';
// functions
const add = (a, b) => {
    return a + b;
};
const subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a: number, b: number): number
// }
let multiply = function (c, d) {
    return c * d;
};
const logMsg = (message) => {
    console.log(message);
};
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
// Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg('Hello');
logMsg(add(4, 5));
logMsg(subtract(5, 4));
logMsg(multiply(2, 6));
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(total(10, 2, 3));
