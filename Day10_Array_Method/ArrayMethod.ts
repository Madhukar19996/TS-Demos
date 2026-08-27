
let numbers:number[]=[1,2,3,4,5];
let fruits:string[]=["Apple","Banana","Orange","Mango"];

//length-->attribute (Not a Method)

console.log("Size of numbers :",numbers.length); //5
console.log("Size of numbers :",fruits.length);  //4

// 1.push()- Adds single /multiple elements to the end of the array.
//Syntax : array.push(element1,....,elementN)
numbers.push(6,7);
console.log("After push() :",numbers);

// 1.push()- Removes the last element from an array.
//Syntax : array.pop()

let lastFruit=fruits.pop();
console.log("After pop() :",fruits);
console.log("Removed Fruite is :",lastFruit);

//3. shift() -Removes the first element from an array
//syntax: array.shift()

let firstNumber=numbers.shift();

console.log("After shift()",numbers); //[ 2, 3, 4, 5, 6, 7 ]
console.log("Removed Number:",firstNumber); //1 


//4 unshift()- Adds singlr/multiple elements to the beginning of an array
//syntax: array.unshift(element1,....,elementN)

fruits.unshift("kiwi","pear");
console.log("After unshift():",fruits);

//5. concat()- Combines two or more arrays
//Syntax : array.concat(array1,...,arrayN)

let combinedArray=numbers.concat([8,9],[10]);
console.log("Concatenated array :",combinedArray); //[2, 3, 4,  5, 6,7, 8, 9, 10]

//6 . slice() -> Extracts a section of an array
//starting index starts from zero
//Ending index will be exclusive. Ex: if 3 is ending index it will consider 2 (3-1=2) 

//let extractedArray=fruits.slice(1,3); [ 'pear', 'Apple' ]
let extractedArray=fruits.slice(1,3); //['Apple', 'Banana', 'Orange' ]
console.log("After slice() :", extractedArray);

//7.splice() -> Adds/removes from an array(from everywhere)
//syntax: array.splice(start,deleteCount,item1,...,itemN)

console.log("current elements in fruits array :",fruits)// [ 'kiwi', 'pear', 'Apple', 'Banana', 'Orange' ]

// Example 1 : 
let removedElement=fruits.splice(1,2); //Here 1 is starting index, 2 is represent how many elements to be removed 
console.log("After slice(1,2)",fruits); // [ 'kiwi', 'Banana', 'Orange' ]
console.log("Removed Elements:",removedElement); //[ 'pear', 'Apple' ]

//Example 2 :
fruits.splice(1,0,'pineapple','grapes');
console.log("After splice(1,0,'pineapple','grapes'):",fruits); //[ 'kiwi', 'pineapple', 'grapes', 'Banana', 'Orange' ]

//Example 3 :
fruits.splice(1,2,'papaya','cheery');
console.log("After splice(1,2,'papaya','cheery'):",fruits); //[ 'kiwi', 'papaya', 'cheery', 'Banana', 'Orange' ]

// 8. indexOf() --> finds the index of element,if element not found then return -1.
//syntax : array.indexOf(serachElement) or array.indexOf(searchElement,Starting Index)

//Example 1 :
let bananaIndex=fruits.indexOf('Banana');
console.log("Index of Banana:",bananaIndex); //3

let chikuIndex=fruits.indexOf('Chiku');
console.log("Index of Banana:",chikuIndex); //-1 

//Ex 3 :

bananaIndex=fruits.indexOf('Banana',2);
console.log("Index of Banana:",bananaIndex); //3


//includes()- Checks if an element exists
//true or false

//syntax : array.includes(searchElement,fromIndex)

let isAppleExists=fruits.includes('apple');
console.log("Does fruites include apple:",isAppleExists); //false

let isBananaExists=fruits.includes('Banana');
console.log("Does fruites include Banana:",isBananaExists); //true 


//10 toString() --> convert array to string
//Syntax : array.toString()

console.log(numbers);

let numbersString=numbers.toString();
console.log("Converted Array to string :",numbersString); // 2,3,4,5,6,7

let myarray:string[]=['M','A','D','H','U','K','A','R'];

console.log("Orginal myarray:",myarray);

let str=myarray.toString();
console.log("Converted string :",str); //M,A,D,H,U,K,A,R