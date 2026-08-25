// if condition 

/*

if(condition)
{
//statemets 
}

*/

//Example 1 : if ahe is greater than 18 , the message "You can vote" will be printed .

let age:number=10;

if(age>18){
    console.log("You can vote !!!");
}

//if else condition 
/*

if(condition)
{
//statements;
}
else
{
//statements;
}


*/

//Example 2: If num is divide by 2 , it is even otherwise ,it is odd.
/*
let num:number=25

if(num%2==0)
{
  //console.log("Even no :",num);
    console.log(`Even no : ${num}`);
}
else
{
  console.log(`Odd no : ${num}`)
}
*/


//Nested if else 

/*

if(condition 1 )
{
 statements;
}
else if (condition 2)
{  
  statements 2 ;
}
else if (condition 3)
{  
  statements 3 ;
}
else
{
    statements ; 
}

*/

//Example 3 : Depending on the marks ,display appropriate grade.
/*
marks >=90  Grdae A
marks >=75  Grdae B
marks >=60  Grdae C
Grdae D
*/

/*
let marks:number=97;

if(marks>=90 && marks<100) //Condition  1
{
  console.log("Grade A"); //Condition 2 
}
else if(marks>=75 && marks<90) //Condition 3 
{
 console.log("Grade B");
}
else if(marks>=60 && marks<75)
{
 console.log("Grade C");
}
else
{
console.log("Grade D");
}
*/

//Example 4 :Browser Selection 

/*
let browser:string="Opera";

if(browser==="Chrome")
{
 console.log("Browser is Chrome ");
}
else if(browser==="Edge")
{
 console.log("Browser is Edge ");
}
else if(browser==="Safari")
{
 console.log("Browser is Safari");
}
else
{
  console.log("Default Browser is opening..")
}

*/

//switch case 

/*
switch (expression)
{ 
case value 1 : statements;
               break;
case value 2 : statements;
               break;
case value 3 : statements;
               break;                              
case value 4 : statements;
               break;
default      : statements;                
}

*/

//Example 5 : Depending on the the value of day, print the corresponding day of the week.

/*
let day:number=9;

switch(day)
{

case 1: 
        console.log("Monday")
               break;
case 2: 
        console.log("Tuesday")
               break;
case 3: 
        console.log("Wednesday")
               break;                            
case 4: 
        console.log("Thursday")
               break;
case 4: 
        console.log("Thursday")
               break;
case 5: 
        console.log("Friday")
               break;
case 6: 
        console.log("Saturday")
               break;     
case 7: 
        console.log("Sunday")
               break;                                                       
default      : console.log("Invalid week");   
}
*/

//Example 6 : Switch statement can aslo includ ean expression.
let x:number=10, y:number=5;

switch(x-y) // ---> //expression
{
    case 0:console.log("Result Zero")
            break;
    case 5:console.log("Result is Five")
            break;
    case 10:console.log("Result is Ten")
            break;
    default : console.log("Result is something else")                        
}