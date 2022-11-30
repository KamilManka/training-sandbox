// function myAdd(a:boolean,b:string){
//     return a+b;
// }

// myAdd(true,"a") // 3

// typy prymitywne string number boolean

// typy zlozone array obj

interface Human {
    name: string;
    age: number;
    isSleepy: boolean;
    isHungry?: boolean;
    books?: string[]; // string[]
}

const obj:Human={
    name: "Adam",
    age: 66,
    isSleepy: false,
    books: ["Ksiazka1"]
}
const obj2:Human={
    name: "Adam",
    age: 66,
    isSleepy: false
}

const humans:Human[]=[
    obj,
    obj2
]

// function isHuman(obj:Human){
//     return 50;
// }
// isHuman()

let num1=3;

//tuple

let x:[number,Human]=[1512,obj]

enum Tarsy {
    WARSZAWA=3,
    GDAŃSK=15,
    RZESZÓW=30
}

let y:Tarsy=Tarsy.RZESZÓW;

type Union=string | number;

type Literal = "add" | "substract";

