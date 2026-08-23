// Variable : container which can hold/store some data

//x=10 

//studentName="Madhukar"


// var, let ,const 

//Syntax : keyword variableName : data type(optional)=value

// Ex 1 : var age : number =30
// Ex   : var age=30

// var age=30;
// console.log("age")
// console.log(age)


// var  vs  let vs  const
// =======================
/*

1) Scope 
2) Declaration/Value Assignemnt
3) Re-declaration
4) Re-intialization /Re-assignment
5) Hosting

*/

//var --> We do not use this in Modern JS/TS.Avoid var because it has function scope and can lead to expected behavour.
//let --> Use let when you need a variable that can change .
//const --> Use const when the variable value should not change .


// 1). Scope --> Accessible area (Functional scope  (var) & Bloack scope (let,const))

//Example 1 : var ---> functional scope

/*
function varScope()
{
    if(true)
    {
        var msg="Hello world";
        //console.log(msg); //Hello world
    }

    console.log(msg)  //Hello world
}


varScope();
*/

//Example 2 : let & const (BlockScope)

/*
function blockScope()
{
    if(true)
    {
        let msg="Hello world";
        const greet="Hello const";
        //console.log(msg); //Hello world
        //console.log(greet); //Hello const
    }

    console.log(msg);  // ReferenceError: msg is not defined --> can't access
    console.log(greet); // ReferenceError: msg is not defined --> can't access
}
blockScope();
*/

//Example 3: 

/*
function scopeDiff()
{
    if(true)
    {
        var num1=10;
        let num2=20;
        const num3=30;
        //console.log(num1);
       //console.log(num2);
       //console.log(num3);
    }
    //console.log(num1); can access --> functional scope
    //console.log(num2); can't access --> block scope
    //console.log(num3);can't access --> block scope
}

scopeDiff();
*/

//2) Declaration/Value Assignemnt
/*

//Example 1 : var can be declared without intialization
var x; //declaration
console.log(x); //undefined
x=30; //initilization
console.log(x); //30

*/

//Example 2 : let  can be declared without intialization

/*
let y; //declaration
console.log(y); //undefined
y=30; //initilization
console.log(y); //30
*/

//Example 3 : const  can't be declared without intialization.You must be initilized at the time of declaration.
/*

//const z; --> this is incorrect
const z=30;
console.log(z); //triggerUncaughtException --> name: 'TransformError'

*/


// 3) Re-declaration

//var --> allows the Re-declaration
//let & const --> not allows the Re-declaration (making code safer)

//Example 1: var allows the Re-declaration
/*
var city="New Delhi";
var city="Amritsar";
console.log(city); //Amritsar
*/

//Example 2 : let not allows the Re-declaration (making code safer)
/*
let state="U.P";
let state="PUNJAB";
console.log(state); //name: 'TransformError'
*/

//Example 2 : const not allows the Re-declaration (making code safer)
/*
let country="U.S.A";
let country="India";
console.log(country); // name: 'TransformError'
*/

//4) Re-intialization /Re-assignment

//var and let -> Re-intialization /Re-assignment allowed
//const --> Re-intialization /Re-assignment not allowed

//Example 1 : var allows Re-intialization
/*
var age=25;
age=30; //allowed 
console.log(age);
*/

//Example 2 : let allows Re-intialization
/*
let age=25;
age=30; //allowed 
console.log(age);
*/

//Example 3 : const not allows Re-intialization
/*
const age=25;
age=30; //TypeError: Assignment to constant variable. 
console.log(age);
*/

//5) Hosting --> var(Hoisted with undefined) , let & const(not initialized )
/*
console.log(a); //undefined
var a=10;
console.log(a);
*/

/*
console.log(a); //ReferenceError: Cannot access 'a' before initialization
let a=10;
console.log(a);


*/
/*

console.log(a); //ReferenceError: Cannot access 'a' before initialization
let a=10;
console.log(a);

*/