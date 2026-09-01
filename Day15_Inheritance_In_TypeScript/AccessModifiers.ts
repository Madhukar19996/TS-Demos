//Parent class 

class Person
{
    public name:string; //public property -accessible anywhere
    protected age:number; // protected property - accessible wihtin the class and its chid class
    private ssn:number; // private property - accessible wihtin the class

    constructor(name:string,age:number,ssn:number)
    {
        this.name=name;
        this.age=age;
        this.ssn=ssn;
    }

    public displayInfo()
    {
        console.log("Name :",this.name);
        console.log("Age :",this.age);
        console.log("SSN :",this.ssn);
    }
}

class Employee extends Person
{
    private employeeId:number;

     constructor(name:string,age:number,ssn:number,employeeId:number)
    {
        super(name,age,ssn);
        this.employeeId=employeeId;
    }

    employeeDetails()
    {
        console.log("Name :",this.name);
        console.log("Age :",this.age);
        //console.log("SSN :",this.ssn); //Property 'ssn' is private and only accessible within class 'Person'.
        console.log("EmployeeId :",this.employeeId); //private ,still it is declared inside the same class 

    }
}
let emp=new Employee("Madhukar",27,2252221123,101);

emp.displayInfo(); //parent class
emp.employeeDetails()

console.log(emp.name);
//console.log(emp.age); //not accessible
//console.log(emp.ssn); //not accessible