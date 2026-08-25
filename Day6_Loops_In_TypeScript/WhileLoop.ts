//print 5 numbers 1 2 3 4 5
/*

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

*/

// while loop : A while loop executes as long as the condition is true.

/*
let i:number=1; ---> intialization 
while(condition) ---> condtion
{
  statements;
                 ----> inc/dec 
}

*/

//Example 1 :Print 1....5 using while loop.

/*
let i:number=1; //Inilization
while(i<=5)  //t //t //t //t //f
{
    console.log(i); //1 //2 //3 //4 //5
    i++; //2 //3 //4 //5 //6
}

*/


//Example 2 : Print even numbers  1 to 10 ---> 2 4 6 8 10
/*

let i=1
while(i<=10)
{
    if(i%2==0)
    {
      console.log(i);
    }
    i++;
}

*/

//Example 3 : Print odd numbers 1 to 10.

/*
let i=1;
while(i<=10)
{
    if(i%2!=0)
    {
      console.log(i);
    }
    i++;
}

*/

//Example 4 : Print reverse number 10 to 1 


/*
let i:number=10;
while(i>=1)
{
    console.log(i);
    i--;
}
  
*/

/*

//
When the condition never become false then it will go to infinite loop.
while(true)
{
    console.log(1);
}
*/