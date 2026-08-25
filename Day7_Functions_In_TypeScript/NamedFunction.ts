//Name function : A function that is declared with a name.
/*
Syntax :
fuction functionName(parameter):returnType
{
  //block of code 
}


fuctionName();  //calling the function/invoking the function
*/

//Example 1 : Named function with no parameters and no return type 
/*

function display():void
{
    console.log("Welcome to TypeScript");
}

display(); //calling the function 

*/


//Example 2 : Named function with parameters and return type 
/*
function addNumber(x:number,y:number):number
{
    return x+y;
}

*/

//let res:number=addNumber(20,30)
//console.log(res);
//console.log(addNumber(10,20));
//console.log(addNumber(10,20,20)); //Compile time error : Expected 2 arguments, but got 3 
//console.log(addNumber(10)); //Compile time error : Expected 2 arguments, but got 1


//Example 3 :Named function with Rest parameters same type

/*
function addNumber(...nums:number[])
{
    let i;
    let sum:number=0;

    for(i=0;i<nums.length;i++){
        sum=sum+nums[i];
    }
    console.log("sum of the numbers",sum)
}

addNumber(1,3) //4
addNumber(14,45,78) //137
addNumber(1,2,3,4,5,6)  //21
*/

//Example 4 : Named function with Rest parameters with multiple type.
/*
function findElements(...elements:(number | string)[]):number
{
   return elements.length;



}

//let res=findElements(3,"Madhukar",2,1,"Pushkar"); //5
//let res=findElements(3,7,2,1,9,7); //6
let res=findElements("Madhukar","Pushkar","Piyush");//3

console.log(res);
*/

//Example 6 : Named function with optional parameter.

/*
function displaydetails(id:number,name:string,mailId?:string):void
{
  console.log("ID:",id);
  console.log("Name:",name);

  if(mailId!==undefined){
  console.log("MailID:",mailId);
  }
}

displaydetails(2252211,"Madhukar","Madhukar@tcs.com");
displaydetails(2252211,"Madhukar");
*/

//Example 6 : Named function with default parameter.

/*

function calculateDiscount(price:number,rate:number=0.10):void 
{
    let discount=price*rate;

    console.log("Discount Amount :",discount);
}

calculateDiscount(100,0.50);
calculateDiscount(1000) ;

*/
