//CallBack Function: A function passed as an argument to another function and executed later.


//Example 1 :

/*
//Function that takes callback function as an pararmeter
function greet(name:string,callbackSmg:(message:string)=>void)
{
   console.log(name);
   callbackSmg("Hello")
}

//callback function
function showMessage(msg:string)
{
    console.log(msg);
}


//calling the function by passing the callback function.
greet("Madhukar",showMessage)

*/

//Example 2 : 
/*

//callback function
function displayResult(result:number):void
{
    console.log(result);
}

function sum(a:number,b:number,callbackDisplayResult:(result:number)=>void)
{
  let result=a+b;
  callbackDisplayResult(result);
}

sum(10,20,displayResult);

*/