/*
-> Tuples TypeScript 
-> A tuple is a fixed length array where each element has a specific type .
-> It helps in storing multiple fields of diffrent data types together

*/

//Example 1 : Tuple with 2 values 

/*
let person :[string,number]=["Pushkar",101];

console.log(person);
console.log(person[0]);
console.log(person[1]);
*/

//Example 2 : Tuple with multiple values 
let user:[number,string,boolean,number,string]=[10,"Piyush",true,101,"Madhukar"];
console.log(user);

//Example 3 : Iteration over a tuple using a traditional for loop.

for( let i=0;i<user.length;i++)
{
    console.log(user[i]);
}

//Example 4: Iteration over a tuple using 'for ...in'for loop (index-based iteration).
for( let i in user)
{
    console.log(user[i]);
}


//Example 5: Iteration over a tuple using 'for ...of'for loop (value-based iteration).
for( let value of user)
{
    console.log(value);
}

//Example 6: Tuple Array (Array of tuple)

let student:[number,string][]=[ [101,"Piyush"],[101,"Preeti"],[103,"Subham"] ];
console.log(student.length); //3 

console.log(student[0]); //[ 101, 'Piyush' ]

let tp1=student[0];
console.log(tp1[0]); //101
console.log(tp1[1]); //Piyush

let tp2=student[1];
console.log(tp2[0]); //102
console.log(tp2[1]); //Preeti