//step 1: write a signatures of functions


//step 2: implement a function 


//step 3:  calling the function

//Example 1 : Different parameter Types(data types) 
// Example 1: Different parameter types

/*
function getInfo(id: number): string;
function getInfo(name: string): string;

function getInfo(param: number | string): string 
{
    if (typeof param === "number") 
        {
        return `User ID is: ${param}`;
        } 
        else 
        {
        return `User Name is: ${param}`;
        }
}

      
console.log(getInfo(101));  //User ID is: 101
console.log(getInfo("Madhukar"));   //User Name is: Madhukar 

*/

//Example 2 :Different Number of parameters
/*
function add(a:number,b:number):number;
function add(a:number,b:number,c:number):number;

function add(a:number,b:number,c?:number):number
{
    if(c!==undefined)
    {
      return  a+b+c;
    }
      return a+b;
}

console.log(add(10,20)); //30
console.log(add(10,20,30)) //60

*/
//Example 3 :Different Return types 
/*
function processInput(str:string):string;
function processInput(num:number):number;

function processInput(input:string|number):string|number
{
    if(typeof(input)=="string")
        {
             return input.toUpperCase();
        }
        else
        {
            return input*2 ;
        }
}

console.log(processInput("madhukar"));
console.log(processInput(6));

*/

//Example 4: 

function greet(name:string):string;
function greet(age:number):number;
function greet(isMarried:boolean):boolean;

function greet(value:string| number|boolean):string|number|boolean
{
    if (typeof value=="string")
    {
        return `Hello ${value}`;
    }
    else if (typeof value=="number")
    {
      return `You are ${value} year old`;
    }
    else
    {
        let result:string=value?"Married":"Single";
        return result;
    }
}

console.log(greet("Madhukar"));
console.log(greet(27));
console.log(greet(false));
console.log(greet(true));