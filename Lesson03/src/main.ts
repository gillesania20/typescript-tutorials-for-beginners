// Array
let array: string [] = ['one', 'two'];
let mixed: (string | number) [] = [43, 43, 'mystring'];
array.push('three');
mixed.unshift('string');

// Tuple
let myTuple: [string, number, boolean] = ['Lorenz', 25, false];

// Object
let myObj: object = {};

type Guitarist = {
    name: string,
    active?: boolean,
    albums: (string | number) []
}

interface Vocalist {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    name: 'Jimmy',
    albums: ['I', 'II', 'IV']
}

const greetGuitarist = (input1: Guitarist) => {
    return `Hello ${input1.name}!`;
}

let myVocalist: Vocalist = {
    name: 'Name one',
    albums: [1, 'two', 3]
}

// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to Javascript but something added to the language at runtime"
enum Grade {
    U, // or U = 1
    D,
    C,
    B,
    A
}

console.log(array);
console.log(mixed);
console.log(evh);
console.log(jp);
console.log(greetGuitarist(evh));
console.log(myVocalist);
console.log(Grade.U);
console.log(Grade.A);