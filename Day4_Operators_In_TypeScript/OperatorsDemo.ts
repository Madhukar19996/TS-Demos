//let a:number=10 , b:number=20;

//Arithmetic oprators :
//console.log("****Arithmetic opeartors******")
/*
console.log(a+b); //a+=b
console.log(b-a); //a-=b 
console.log(a*b); //a+=b
console.log(b/a); //a/=b
console.log(a%b); //a%=b
console.log(2**5);
*/

//Assigment operators = 

console.log("*****Assigment opeartors******")
//a=10 , b=2 ;

//a+=b      //a=a+b;
//console.log(a);
/*
console.log(a+=b); //a=a+b -->12
console.log(a-=b); //a=a-b -->8
console.log(a*=b); //a=a*b -->20
console.log(a/=b); //a=a/b -->5
console.log(a%=b); //a=a%b -->0
*/

//Relational operators/Comparision ---> ( > < <= >= == != ====(strict equality) )
//Always returns boolean value --> true/false

/*
console.log("*****Relational operators ******");
a=10;b=20;

*/


/*
console.log(a>b) //false
console.log(a<b) //true
console.log(a<=b) //true
console.log(a>=b) //false
console.log(a==b) //false
console.log(a!=b)  //true 

*/

//Diffrence between ==(equality)  ===(strict equality only for JS/TS )
/*

console.log("Diffrence between ==(equality)  ===(strict equality)");
let num1:any=10;  //number type
let num2:any="10" //string type 

console.log(num1==num2); //true (only compares values )

console.log(num1===num2); //false (compares the value & type)

*/

//Logical operators  --> && || ! 
//Returns true / false 
//works between boolean variables 

//console.log("*****Logical operators ******");
// b1   b2    &&      ||   !b1
//============================
//true  true  true   true  false
//true  false false  true  false
//false true  flase  true  true
//false false false  false true 

/*
let b1:boolean=true , b2:boolean=false;

console.log(b1 && b2); //false
console.log(b1 || b2); //true
console.log(!b1);  //false
console.log(!b2);  //true

//combination of ligical & relational operators 

console.log("****Mixing of logical & relational operators*******");

console.log(20>10 && 10>5); //true
console.log(10<20 || 15>5); //true
*/

//