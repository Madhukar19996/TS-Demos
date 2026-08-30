//String - Text value or combination of characters 
/*
1. Single  Quote- String Literal ('Single quote')
2. Double Quote - String Literal ("Double Quote")
3.backtick (``) - String template - `When we try to use a string variable inside another
string value ${variable}`

'' or "" or `` (backtick)

//index in string starts with 0






*/


//Declartion of strings
let str1:string='This is a string with single quote';
let str2:string="This is a string with double quote";
let str3:string=`This is a string with back tick`;

console.log(str1);
console.log(str2);
console.log(str3);

//when to use back tick ``
let num:number=10;

console.log("Number is :",num); //10 //valid
console.log("Number is :${num}"); //not valid
console.log('Number is :${num}'); //not valid 
console.log(`Number is :${num}`);  //Number is :10

//String Methods 

let str:string="Hello,Typescript!";

//1.length - find the length of a string (How many number of characters)

console.log("Length of a string : ",str.length);

//2. toUpperCase() and toLowerCase()
console.log("Upper case :",str.toUpperCase()); //Upper case : HELLO,TYPESCRIPT!
console.log("Lower case :",str.toLowerCase());  //Lower case : hello,typescript!

//3. charAt(index) and indexof(string)

console.log("Character at 4th index",str.charAt(4)); //o
console.log("Index of Type",str.indexOf('Type'));//6 

//4. substring(starting index,ending index)
//ending index is exclussive
//string value is case sensitive
//Hello,Typescript!

console.log(str.substring(0,5)); //Hello


//5 . includes(): returns true/false (boolean)
console.log(str.includes("abc")); //false
console.log(str.includes("TypeScript")); //false
console.log(str.includes("!")); //true
console.log(str.includes("Typescript")); //true

// 6. startWith() and endsWith() : returns a boolean value (true/false)

console.log("startsWith:",str.startsWith("Hello"));
console.log("endsWith:",str.endsWith("!"));
console.log("startsWith:",str.startsWith("abc"));


//7. replace()
console.log("Replaced string:",str.replace("Typescript","Word")); //Hello,Word!

//8. split()- break the string into multiple parts based on the delimeter, returns an array

//Ex 1: 
let words:string[]=str.split(",");
console.log("After splitting :",words); //[ 'Hello', 'Typescript!' ]

//Ex 2:
let mystring="abc@gmail.com,xyzabc";
let arr:string[]=mystring.split(",");
console.log("email :",arr[0]);
console.log("password :",arr[1]);

//9. trim(), trimStart(), trimEnd()

mystring="   welcome to typescipt   ";
console.log("Orginal string :",mystring); //'    welcome to typescipt   '
console.log("trim string :",mystring.trim());   //'welcome to typescipt'
console.log("trimStart string :",mystring.trimStart());//'welcome to typescipt   '
console.log("trimEnd string :",mystring);//    welcome to typescipt

//10. concat()
str1="welcome";
str2="to typescript";
str3="and javascript";

console.log("After concatenation:",str1.concat(str2)); //welcometo typescript
console.log("After concatenation:",str1+str2); //This is a alternative but not recomended
console.log("After concatenation:","welcome".concat("to typescript")); //welcometo typescript
console.log("After concatenation:",str1.concat(str2).concat(str3)); //welcometo typescriptand javascript



//concept of immutability
//num=10;
let res=num+5;
console.log(res); //15
console.log(num); //10

str1="welcome"
let mofifiedStr=str1.concat(" to typescript");

console.log(str1); //welcome

//Multiline String with back tick operator.

let multiline:string=`welcome
                      to typescript and 
                       javascript`;
console.log(multiline);                       




