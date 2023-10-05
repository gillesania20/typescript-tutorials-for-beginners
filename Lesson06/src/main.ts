class Coder {
    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'Typescript'
    ){
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    secondLang!: string
    public getAge() {
        return `Hello, I'm ${this.age}`;
    }
}

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ){
        super(name, music, age);
        this.computer = computer;
    }
    public getLang() {
        return `I write ${this.lang}`;
    }
}

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    constructor(name: string, instrument: string){
        this.name = name;
        this.instrument = instrument;
    }
    name: string;
    instrument: string;
    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}

class Peeps {
    constructor(public name: string) {
        this.name = name;
        this.id = ++Peeps.count;
    }
    static count: number = 0;
    static getCount(): number {
        return Peeps.count;
    }
    public id: number;
}

class Bands {
    constructor() {
        this.dataState = [];
    }
    private dataState: string[];
    public get data(): string[] {
        return this.dataState;
    }
    public set data(value: string[]) {
        if(Array.isArray(value) && value.every(item => typeof item === 'string')) {
            this.dataState = value;
            return;
        }else throw new Error('Param is not an array of strings');
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