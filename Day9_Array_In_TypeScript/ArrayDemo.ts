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

//let empIDS:Array<number>=[101,102,103,104]
