/*
1) Primitive Data Types(Built-in)
Number
String
Boolean
Null
Undefined
Any
Union Type
Void

2) Non-Premitive DataTypes(Objects) 
Array
Class
Function
Interface
Touple etc...
*/

//  1)Number Type
//Represent both integers and floating numbers 

/*
let age:number=25;
let price=25.9;
let big:number=87623568;

//console.table([age,price,big]);
console.log("Age",age); //Age 25
console.log("Price",price);
console.log("Big",big);

console.log(typeof(age)); //number
console.log(typeof age);  //number
*/

//2) String Type --> Represents textual data

/*
1. SingleQuote (' ')
2. DoubleQuote(" ")
3.Backtick(` `)

*/

/*
let firstName:string="Madhukar";
let lastName:string='Pandey';

//Hello Madhukar Pandey

// Method 1 :
//let greeting:string="Hello",firstName,lastName);
console.log("Hello",firstName,lastName) //Hello Madhukar Pandey

let greeting:string=`Hello ${firstName} ${lastName}`;
console.log(greeting); //Hello Madhukar Pandey
*/

// 3) Boolean Type --> true or false

/*
let isStudent:boolean=true;
let hasJob:boolean=false;

console.log("Is Student ?",isStudent);//Is Student ? true
console.log("hasJob ?",hasJob); //hasJob ? false
*/

// 4) Null & Undefined 
//Represents special types for absence of value 
/*

let emptyValue:null=null;
//emptyValue=10; //Type Safety issue arrised 

let notAssigned:undefined=undefined;

console.table([emptyValue,notAssigned]);

let price:number;
console.log(price); //undefined
*/

//5 ) Any Type --> This will loses TypeScript befefits

/*
let value:any="Pushkar";
console.log(typeof value)
value=1000;
console.log(typeof value)
value=true;
console.log(typeof value)
*/

// 6) Union Type --> Combine multiple types 
/*
let id:string | number| boolean |null;
id='Abcd';
console.log(id);
id="12344567";
console.log(id);
id=true;
console.log(id);
*/

// 7.Void Type --> used for function that don't return anything 

function show():void // Here void is option TS/JS
{
    console.log("TypeScript")
}

show();


function sum(num1:number,num2:number):number{
     return (num1+num2)
}

let result:number=sum(10,20);
console.log(result)