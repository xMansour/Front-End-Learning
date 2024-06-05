console.log("Hi")
let age: number = 20;
let sales: number = 123_456_789;
let course: "Typescript";
let isPublished: boolean = true;
let level;

let emptyArr: number[] = []
emptyArr[0] = 1;
// emptyArr[1] = "2";
let numbers: number[] = [1, 2, 3]

let user: [number, string] = [1, "Mansour"]


const enum Size { small = "S", medium = "M", large = "L" };
let mySize: Size = Size.large;
console.log(mySize);


function calculateTax(income: number, optionalParam?: number, defaultParam = 2000): number {
    let x;
    if (income < 5000)
        return 0;
    else
        return income * 1.2;
}

//this definition isn't the best way
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1, name: "Mansour", retire: (date: Date) => {
        console.log(date)
    }
}

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}


let employee2: Employee = {
    id: 1, name: "Mansour", retire: (date: Date) => {
        console.log(date)
    }
}


//Union types

function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}


console.log(kgToLbs(10));
console.log(kgToLbs("20"));


//Intersection types

type Draggable = { drag: () => void }
type Resizable = { resize: () => void }

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}

//Literal types
type Metic = "cm" | "inch"
let measurement: Metic = "cm";