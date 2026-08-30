//Objects -objects contains properties and behaviour 
//object contains variable and methods 
//object is collection key and value pairs 

//Example 1 :
//employee - name,depart,design,sal
//             bonus(),getDetails(),setDetails()

//Ex 2 : student - stuname, stuId,stugrade
//        getStuDetails(),setStuDetails()

//Diffrent ways to create an object in JS/TS 
/*
1. Using 'Object' type- Directly defines the values for variable(JS/TS)
2. Inline Type Object -We also define the datatype of the keys (T.S)
3. Using typeScript aliases (JS/TS)
4. Using the classes (JS ES16/TS)

*/

//1. Using 'Object' type- Directly defines the values for variable(JS/TS)
// The Typescript 'Object' type represents all the values that are not in primitive type.
/*
let employee:object={
    name:"Madhukar",
    age:27,
    salary:50000,
    job:"Engineer"
}
    */
/*
let employee:object={
    name:"Madhukar",
    age:27,
    salary:50000,
    job:"Engineer",
    getDetails:function(){
        console.log(this.name,this.age,this.salary,this.job); //compile time error
    }
}

console.log(typeof employee); //object 

//acessing object - approach 1 (using .notation)
employee.getDetails(); //Property 'getDetails' does not exist on type 'object'.
*/

let employee={
    name:"Madhukar",
    age:27,
    salary:50000,
    job:"Engineer",
    getDetails:function(){
        return `${this.name} is a ${this.age} years old and he is earning ${this.salary} he is an ${this.job}`;
    }
}

console.log(typeof employee); //object 

//acessing object - approach 1 (using .notation)
 
console.log(employee.name,employee.age,employee.salary,employee.job); //Madhukar 27 50000 Engineer
console.log(employee.getDetails()); //Madhukar is a 27 years old and he is earning 50000 he is an Engineer

//acessing object - approach 2 (using ["Key"] notation)
console.log(employee["name"],employee["age"],employee["salary"],employee["job"]); //Madhukar 27 50000 Engineer
console.log(employee["getDetails"]()) //Madhukar is a 27 years old and he is earning 50000 he is an Engineer


//Modify the value
employee.job="Sdet";  
//employee["job"]="Sdet";
console.log("Modified job is :",employee.job); //sdet

//================================================================================
//2. Inline Type Object -We also define the datatype of the keys (T.S)
// Problem with Inline Type Object :Need to repeat structure for every object 
/*

let student1:{
       name:string,
       age:number,
       grade:string,
       getSummary:()=>string     
} =
{
    name:"Piyush",
    age:25,
    grade:"A",
    getSummary:function ()
    {
         return `${this.name} is ${this.age} years old and secored grade ${this.grade}`;
    }
}

console.log(student1.getSummary()); //Piyush is 25 years old and secored grade A

// Problem with Inline Type Object :Need to repeat structure for every object 

let student2:{
       name:string,
       age:number,
       grade:string,
       getSummary:()=>string     
} =
{
    name:"Pritam",
    age:23,
    grade:"B",
    getSummary:function ()
    {
         return `${this.name} is ${this.age} years old and secored grade ${this.grade}`;
    }
}

console.log(student2.getSummary()); //Pritam is 23 years old and secored grade B
*/

//======================================================================================
//3. Using typeScript aliases (TS) : allows creating a new name for an existing type.

//Example 1 : 

/*

type Product={
    name:string,
    price:number,
    getInfo:()=>string
};

let book1:Product =
{
    name:"Learn Java",
    price:300,
    getInfo:function ()
    {
        return `${this.name} costs ${this.price}`;
    }
}

let book2:Product =
{
    name:"Learn Python",
    price:500,
    getInfo:function ()
    {
        return `${this.name} costs ${this.price}`;
    }
}

let book3:Product =
{
    name:"Learn TypeScript",
    price:600,
    getInfo:function ()
    {
        return `${this.name} costs ${this.price}`;
    }
}

console.log(book1.getInfo()); //Learn Java costs 300
console.log(book2.getInfo());  //Learn Python costs 500
console.log(book3.getInfo());  //Learn TypeScript costs 600

for (let i in book3)
{
    console.log(book3.name);
    console.log(book3.price);
}

// Example 2 : intersection Types

type Personal={
    name:string,
    age:number,

};

type Contact={
    email:string,
    phone:number
};

type Candidate=Personal & Contact &
{
    getContactInfo:()=> string;
};

let candidate:Candidate =
{
     name:"Ajay",
     age:29,
     email:"ajay@gmail.com",
     phone:9986744329,
     getContactInfo:function() {
         return `${this.name} can be contacted at ${this.email} or ${this.phone}`;
     }
}

console.log(candidate.getContactInfo());

*/

//===============================================================================

//4. Using the classes (JS ES16/TS)

class Person {
    ssn:string;
    firstName:string;
    lastName:string;

    constructor(ssn:string ,firstName:string,lastName:string)
    {
        this.ssn=ssn;
        this.firstName=firstName;
        this.lastName=lastName;

    }

    getFullName():string
    {
        return `${this.firstName} ${this.lastName}`
    }

    getDetails():string
    {
        return `SSN ${this.ssn}, Name:${this.getFullName()}`;
    }

}

//object creation
let person1=new Person('12344432',"Piyush","Pandey");
console.log(person1.getDetails());

let person2=new Person('12454456',"Madhukar","Pandey");
console.log(person2.getDetails());

let person3=new Person('33454432',"Pushkar","Pandey");
console.log(person3.getDetails());

