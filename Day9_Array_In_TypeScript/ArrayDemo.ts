/*

Arrays in TypeScript
=====================
-> An Array is a special type of variable that stores multiple values 
-> The values can be of the same data type or different data types .
-> Arrays are declared using `[]` or the generic `Array<T>` type.
-> Indexing starts from 0.
-> Arrays are an ordered collection of elements. 

*/

//Approach 1 :Using leteral 

//let names:string[]=[];    //Declaration

//Initilization values 
/*
names[0]="Madhukar";
names[1]="Pushkar";
names[2]="Piyush";
names[3]="Vikas";
*/

/*
let names:string[]=["Madhuakar","Pushkar","Piyush","Vikas"]; //Declaration + Initilization

console.log(names);
*/

//Approach 2 : Using Generic (Array<T>) type 

let empNames:Array<string>=["Madhukar","Pushkar","Piyush","Vikas"];

let empIDS:Array<number>=[101,102,103,104];

//let data:Array<string|number>=["Madhukar",101,"Sheela",102,"Piyush","Shila"];

let mixedData:Array<any>=[1,"Pushkar",true,null];
//console.log(empNames)
console.log("Size of an Array :",empNames); //4 (How many values are stored)
//console.log(empNames[1]); //Pushkar

//Example 1 : Iteration over an array using a traditional for loop.
console.log("Employees Name....");

for(let i=0 ;i<empNames.length;i++)  //i<=empNames.lenght-1
{
    console.log(empNames[i]);   // i is representing an index
}

//Example 2 : Iteration using thr 'for ...in' loop (indexes)

console.log("Employees Ids.....");

for(let i in empIDS)
{
    console.log(empIDS[i]);
}

//Example 3 : Iteration using thr 'for ...of' loop (values).

console.log("Mixed Data....");

for(let value of mixedData)
{
   console.log(value);
}


//Example 4 : Passing an Array to the function.

//Search an element in ana array using function.

function search(ele:number,arr:number[]):boolean
{
    for(let i=0 ;i<arr.length;i++)  //i<=arr.lenght-1
{
      if(arr[i]===ele)
      {
        return true; //Element found 
      }

}
return false;

}

let arr:number[]=[10,20,30,40];
console.log(search(30,arr)); //true
console.log(search(90,arr)); //false 


//Example 5: A functions takes an Array and returns an array
function capitalizedWords(arr:string[]):string[]
{
    let res:string[]=[];

    for(let i=0; i<arr.length;i++)
    {
        res[i]=arr[i].toUpperCase();
    }

    return res;
}
let words:string[]=["akshay","mohit","ajay"]
console.log(capitalizedWords(words));