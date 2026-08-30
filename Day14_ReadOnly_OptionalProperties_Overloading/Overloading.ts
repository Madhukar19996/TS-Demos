//Method overloading and constructor  overloading in TypeScript.

class Calculator
{   
    //constructor overloading
    constructor(); //default constructor

    constructor(a:number ,b:number); //parameterized constructor

    constructor(a?:number,b?:number)
    {
        if(a!==undefined && b!==undefined)
        {
            console.log("Sum of a & b :",(a+b));
        }
        else
        {
            console.log("Default constructor called")
        }
    }
  //Method overloading

  add(a:number,b:number):number;
  add(a:number,b:number,c:number):number;

  add(a:number,b:number,c?:number):number
  {
    if(c!==undefined)
    {
        return a+b+c ;
    }

    return a+b;
  }
  


}

//Usage constuctor overloading

let cal1=new Calculator();
let cal2=new Calculator(20,30);

//Usage Method overloading
console.log("Adding 2 numbers from s1:",cal1.add(10,20));
console.log("Adding 3 numbers from s1:",cal1.add(10,20,30));

console.log("Adding 2 numbers from s2:",cal2.add(10,20));
console.log("Adding 3 numbers from s2:",cal2.add(10,20,30));