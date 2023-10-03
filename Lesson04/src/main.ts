// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

interface Vocalist {
    name: string,
    active?: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber;

// Literal types
let myName: 'Dave';

let userName: 'Dave' | 'John' | 'Amy';
userName = 'John';

// functions
const add = (a: number, b: number): number => {
    return a + b;
}

const subtract = function (c: number, d: number): number {
    return c - d;
}

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//     (a: number, b: number): number
// }

let multiply: mathFunction = function (c, d) {
    return c * d;
}

const logMsg = (message: any): void => {
    console.log(message);
}

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    if(typeof c !== 'undefined'){
        return a + b + c;
    }else{
        return a + b;
    }
}

const sumAll = (a: number, b: number, c: number = 2): number => {
    return a + b + c;
}

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr);
}

logMsg('Hello');
logMsg(add(4,5));
logMsg(subtract(5,4));
logMsg(multiply(2, 6));
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(total(10, 2, 3));