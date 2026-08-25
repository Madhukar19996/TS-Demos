//Arroow Function /Lamda Function: 

/*
Syntax:
let variable =(parameter) =>
{
 //block of code 
}

variable();

*/

//Example 1 : Arrow function eith no parameters and no return type 

/*
let greet=():void =>
{
    console.log("Hello TypeScript")
}

greet();

*/

//Example 2 : Arrow function with parameters and a return type.
/*
let add=(a:number,b:number):number =>
{
    return a+b;
}

console.log(add(20,30)); //50
*/
//Example 3 : Arrow function with implicit
/*
let add=(a:number,b:number):number => a+b

 let multiply=(a:number,b:number):number => a*b  


console.log(add(20,30)); //50
console.log(multiply(20,30)); //600

*/

//Example 4 : Allow function with optional parameter.

/*
let empDetails=(id:number,name:string,mailId?:string):void =>
{
  console.log("ID:",id);
  console.log("Name:",name);

  if(mailId!==undefined){
  console.log("MailID:",mailId);
  }
}

empDetails(2252211,"Madhukar","Madhukar@tcs.com");
empDetails(2252211,"Madhukar");

*/

//Example 5 : Arrow function with default parameter.

/*

let calculateDiscount=(price:number,rate:number=0.10):void =>
{
    let discount=price*rate;

    console.log("Discount Amount :",discount);
}

calculateDiscount(100,0.50);
calculateDiscount(1000) ;

*/

//Example 6: Arrow function with Rest parameters with multiple type.

let findElements=(...elements:(number | string)[]):number =>
{
   return elements.length;



}

//let res=findElements(3,"Madhukar",2,1,"Pushkar"); //5
//let res=findElements(3,7,2,1,9,7); //6
let res=findElements("Madhukar","Pushkar","Piyush");//3

console.log(res);

