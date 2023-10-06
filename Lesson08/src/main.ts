// Typescript Generics
const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
}

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    if(Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return { arg, is: false };
    }
    return { arg, is: !!arg };
}

interface BoolCheck<T> {
    value: T,
    is: boolean
}

const isTrue2 = <T>(arg: T): BoolCheck<T> => {
    if(Array.isArray(arg) && !arg.length){
        return { value: arg, is: false };
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
}

class StateObject<T> {
    constructor(value: T) {
        this.data = value;
    }
    private data: T;
    get state(): T{
        return this.data
    }
    set state(value: T){
        this.data = value;
    }
}

const store = new StateObject('Renz');

console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'Renz'}));
console.log(isObj(null));

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Renz'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({})); //modified
console.log(isTrue({ name: 'Renz'}));
console.log(isTrue([])); //modified
console.log(isTrue([1, 2 , 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

console.log(store.state);
store.state = 'Gillesania';
console.log(store.state);