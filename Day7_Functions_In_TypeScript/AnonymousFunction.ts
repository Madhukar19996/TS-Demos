//Anonymous function (Unamed function/Nameless function) 

/*

An Anonymous function is a fumction that does not have a name.
Instead , it is assigned to a variable , which acts as its name.
 
Syntax :
let variable = function(parameters)
{
 //function body

}

variable(); //calling the function 

*/

//Example 1 : Anonymous function 
/*
let msg =function ():string
{
    return "Hello TypeScript" ;
}

console.log(msg());
*/

//Example 2 : Anonymous function with parameters 

let multiple=function (a:number,b:number):number
{
    return a*b;
}

console.log(multiple(10,20));
