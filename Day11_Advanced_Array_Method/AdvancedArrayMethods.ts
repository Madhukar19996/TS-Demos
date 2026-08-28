//=========forEach(),map(),filter(),reduce(),some(),every()===============

//1. forEach()- Executes a function once for each array element 
//2 . It takes function as a parameter


//Syntax: array.forEach(function(currentValue,index,array){})

//currentValue- The current element being processed in the array.
//index (optional)- The index of the current element being processed in the array
//array(optional) - The array the current element belongs to.


//Ex 1 : Get index of all the fruites along with the value 

let fruites:string[]=['apple','banana','orange','mango','kiwi'];

console.log("Printing fruites along with index using for loop....");
/*
for(let i in fruites)
{
    console.log(i,fruites[i]);
}

console.log("Printing fruites along with index using for for ..Each method ....");

fruites.forEach(function(element,index){

    console.log(`${index}`,`${element}`);
})
*/

//using arrow function

fruites.forEach((element,index)=>{

    console.log(`${index}`,`${element}`);
})

//Ex 2 : 

fruites.forEach((element,index)=>{

    console.log(element.toUpperCase());
})


//1. map()- Create a new Array with the result of calling the function on every element of an array
//2 . It takes function as a parameter.
//3. Return the same number of elements that we have in original array.


//Syntax: array.map(function(currentValue,index,array){})

//Ex 1 : Get square of all the numbers in an array.Ex:[1,2,3] then result should be [1,4,9]

/*
let number:number[]=[1,2,3,4,5];

let squaredNumber=number.map(function (element){
    

    return (element*element);

})


console.log("Squared Numbers:",squaredNumber); // [ 1, 4, 9, 16, 25 ]
console.log("Original Array:",number); //[ 1, 2, 3, 4, 5 ]

//Ex2 : Double rech number [1,2,3,4,5] =>[2,4,6,8,10]

/*
let doubledValues=number.map((element)=>{

    return (element*2);
})

*/

/*

let doubledValues=number.map((element)=>(element*2)); //if you have single return statement inside the arrow function then {} and 'return' statement are optional.




console.log("Double Numbers:",doubledValues);  // [ 2, 4, 6, 8, 10 ]

*/

//1. filter()- Create a new Array with all the elements that pass/satisfly the function 
//2. It takes function as a parameter.
//3. Return either same and fewer number of elements compared to orginal array.


//Syntax: array.filter(function(currentValue,index,array){})

//Ex 1: Get the only even numbers from an array

let number:number[]=[1,2,3,4,5];
let evenNumbers=number.filter((number)=>(number%2==0));

//console.log("Even numbers :",evenNumbers); //[ 2, 4 ]

//Ex 2 : 
let numGreaterThanThree=number.filter((num)=>num>3);

console.log("Number greater than 3 :",numGreaterThanThree); //[ 4, 5 ]

//1. reduce()- Applies a function on every element of an array and returns a single value.

//Syntax: array.reduce(function(accumulator,currentValue,index,array){})

//Ex 1 : calculate the total sum of the given Array elemets --> [1,2,3,4,5]  
//let total:number=0;
/*
for(let i=0; i<number.length;i++)
{
    total=total+number[i]; //1 2 3 6 10 
}

console.log("Sums of all numbers:",total); //15
*/

/*

let totalSum=number.reduce((total,number)=>total=total+number,0); // Here 0 is default value of accumulator.

console.log("Total sum is :",totalSum); //15

*/

// 5. some() - checks if any element satifies a condition
//    Returns true if atleast one element passes the condition, else false

//Syntax: array.some(function(currentValue,index,array){})


//  Ex 1 : Check array contains negative values 
  
 /*
    let hasNegative=number.some((number)=> number<0);

    console.log("Does Array contains negative ?",hasNegative); //false

 */

//  Ex 2 : Check array contains positive values
  
  /*

    let hasPositive=number.some((number)=>number>0);
    
    console.log("Does Array contains positive ?",hasPositive); //true

  */

// 6. every() - checks if all elements satifies a condition
//    Returns true if all elements passes the condition, else false

//Syntax: array.every(function(currentValue,index,array){})

    
    //  Ex 1 : Check array contains even  values  

    let hasEven=number.every((number)=> number%2==0);

    console.log("Does Array contains even number ?",hasEven); //false

    //  Ex 2 : Check all the numbers greater than or equal to one 
  
  

    let hasGreaterThanOne=number.every((number)=>number>=1);
    
    console.log("Does all the numbers greater than or equal to one ?",hasGreaterThanOne); //true

  //  Ex 3 : Check array contains positive values
  
  

    let hasPositive=number.some((number)=>number>0);
    
    console.log("Does Array contains positive ?",hasPositive); //true

  
