//Inheritance
//A class can reuse the properties and methods of another class.
//Inheritance is a mechanism where one class (child) can inherit the properties and methods of another class (Parent class)
// Inheritance allows you to reuse functionality of an existing class without rewritting it .


//A ---properties +methods (Parent class/BaseClass/Super class)
//B extends A---properties+methods (Child class/derived class/Sub class)

//Method Overriding
//A subclass/child class can provide a specific implementation of a method that is is already defined in its super class.
// The method must have the same name , return type , and parameters.

//Parent class
class Car
{
    name:string;
    color:string;
    model:string;

    constructor(name:string,color:string,model:string)
    {
        this.name=name;
        this.color=color;
        this.model=model;
    }

    start(){
        console.log("Car started...");
    }

    stop(){
        console.log("Car stopped...");
    }

    displayInformation(){
        console.log(`Name: ${this.name}, Color ${this.color},Model :  ${this.model}`);
    }
}

//Child class --Honda
class Honda extends Car
{
    year:number;

    constructor(name:string,color:string,model:string,year:number)
    {   
        super(name,color,model) ;
        this.year=year;
    }

    //method overriding 
    start()
    {
        console.log("Honda statred ...");
    }

    yom(){
        console.log(`Name: ${this.name}, Color ${this.color},Model : ${this.model}, YOM :${this.year}`);
    }
}


//Child class --Tata
class TATA extends Car
{
    year:number;

    constructor(name:string,color:string,model:string,year:number)
    {   
        super(name,color,model) ;
        this.year=year;
    }

    //method overriding 
    start()
    {
        console.log("TATA statred ...");
    }

    yom(){
        console.log(`Name: ${this.name}, Color ${this.color},Model : ${this.model}, YOM :${this.year}`);
    }
}


//Usage 

//Create Honda Object
let honda=new Honda("Honda","Grey","Honda City",2025);
console.log(honda.name);
console.log(honda.color);
console.log(honda.model);
console.log(honda.year);

honda.start(); // Honda statred ...  //called child class method (overring method)
honda.displayInformation(); //Name: Honda, Color Grey,Model :  Honda City //called parent class method 
honda.stop(); //Car stopped... //Parent class
honda.yom(); //Name: Honda, Color Grey,Model : Honda City, YOM :2025 //child class

//Create TATA Object
let tata=new TATA("TATA","Black","Harrier",2026);
tata.start(); //child class  TATA statred ...
tata.displayInformation(); //Name: TATA, Color Black,Model :  Harrier
tata.stop(); //Car stopped... parent class
tata.yom(); //child class Name: TATA, Color Black,Model : Harrier, YOM :2026

//Parent class variable is honding child class object
let car:Car=new Honda("Honda","Red","Honda City",2026);

car.displayInformation(); //Name: Honda, Color Red,Model :  Honda City --> Parent class
car.start(); //Honda statred ... -->Overring method-->child class execuated 
//car.yom(); //Not accessible --> Property 'yom' does not exist on type 'Car'.\
// => yom() defined inside the child class but not in the parent class






