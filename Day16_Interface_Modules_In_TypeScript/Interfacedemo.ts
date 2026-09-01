/*

1. An interface in TypeScript is a way to define the stucture of an object.
2. It tells the complier what properties  and types an object should have.
3. It's like a blueprint for objects.

Abstract method : we only signature of the method (there is no implementation)

interface InterfaceName
{
  properties
  abstract methods

}
  1. Regular properties
  2. Optional prooerties
  3. Readonly properties & function types
  4. Extending interfaces 
  5. Class implementation 
*/

//Ex 1: Basic Interface

/*
interface Person
{
    name:string;
    age:number;
}

let student:Person=
{
    name:"Madhukar",
    age:27
}

console.log(student.name);
console.log(student.age);
console.log(student); //{ name: 'Madhukar', age: 27 }

//Ex 2: Optional Properties (?)

interface Employee 
{
    id:number;
    name:string;
    deparment?:string //optional property

}

let emp:Employee =
{
    id:101,
    name:"Piyush",

}

let emp1:Employee =
{
    id:102,
    name:"Piyush",
    deparment:"I.T"

}

console.log(emp.id,emp.name,emp.deparment); //101 Piyush undefined
console.log(emp1.id,emp1.name,emp1.deparment); //102 Piyush I.T

//Ex 3 : Read-Only Properties (readonly to prevent modification) 7 function type.

interface Book
{  title:string;
   readonly isbn:string;
   display():void //abstract method
}

let b1:Book=
{
    title:"Leran PlayWright",
    isbn:"1234-ABCD",

    display()
    {
        console.log(b1.isbn,b1.title);
    }
}

console.log(b1.title); //Leran PlayWright
console.log(b1.isbn); //1234-ABCD
b1.display();

console.log("After changing values...");
b1.title="Learn TypeScript";
console.log("After changing title:",b1.title);

//b1.isbn="123-XYZ"; //Error : Cannot assign to 'isbn' because it is a read-only property.

//Ex 4: Extending interfaces (Inheritance is applicable)

//Parent interface
interface Animal
{
   name:string;
}

//child interface
interface Dog extends Animal
{
    color:string;
}

let mydog:Dog =
{
    name:"Buddy",
    color:"Black"
}

console.log(mydog.name,mydog.color);  //Buddy Black

//Ex 5:
//class can extends another class 
//interface can  also extends another interface 

//class can implements interface

*/

interface Animal {
    name:string;
    sound():void ;
}

class Dog implements Animal
{  
    name:string; //inherited from Animal
    color:string; //property belongs to Dog
    
    constructor(name:string,color:string)
    {
        this.name=name;
        this.color=color;
    }

    sound():void
    {
        console.log("Bark...")
    }
}

let pet=new Dog("Tommy","Black");
console.log(pet.name);
console.log(pet.color);
pet.sound();

