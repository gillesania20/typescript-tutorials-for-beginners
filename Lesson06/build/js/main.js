"use strict";
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
class Peeps {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
    static getCount() {
        return Peeps.count;
    }
}
Peeps.count = 0;
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(item => typeof item === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const Dave = new Coder('Renz', 'Rock', 25);
const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
const Page = new Guitarist('Jimmy', 'guitar');
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
const MyBands = new Bands();
MyBands.data = ['one', 'two'];
MyBands.data = [...MyBands.data, 'three'];
//MyBands.data = ['will throw error', 420];
console.log(Dave.getAge());
//console.log(Dave.age);
//console.log(Dave.lang);
console.log(Sara.getLang());
//console.log(Sara.age);
//console.log(Sara.lang);
console.log(Page.play('strums'));
console.log(John.id);
console.log(Steve.id);
console.log(Amy.id);
console.log(Peeps.count);
console.log(MyBands.data);
