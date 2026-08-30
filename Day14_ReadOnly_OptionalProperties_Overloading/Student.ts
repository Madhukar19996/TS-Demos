/*
1. Class
2. Read Only Properties
3. Optional  properties
4. Static variables and method 
   ->1. static properties/methods are common/shared across all the project.
   ->2. static properties/methods can be accessed through class name directly.
   ->3. static properties/methods can be modified using any object
   ->4. we can't use this for static properties , instead we can use class .

*/
class Student 
{
   readonly studentId:number; //Read-only property (can only be assigned once, inside constructor)
   name:string; //Regular property
   email?:string; //Optional property (can be undefined)
   static schoolName:string="DAV Public School"; //Static variable shared among all instances/object
     

   //constructor
   constructor(studentId:number,name:string,email?:string)
   {
        this.studentId=studentId;
        this.name=name;
        this.email=email; //if you don't pass email then it is undefined
        //this.schoolName=schoolName;
   }

   //Method 
   displayInfo():void
   {
    console.log("Student ID:",this.studentId);
    console.log("Student Name:",this.name);

    if(this.email)
    {
       console.log("Student Email:",this.email);
    }
    else
    {
       console.log("Email is not provided");
    }
     console.log("School name :",Student.schoolName); //access static property using Student (class name)
 
   }

   static changeSchoolName(newName:string):void{
          Student.schoolName=newName;
   }
}

//Usage
let s1=new Student(101,"Madhukar");
let s2=new Student(102,"Piyush","Piyush@gmail.com");

//Display Student display
s1.displayInfo();
s2.displayInfo();

//Try to modified the studentId of s1 object.

//s1.studentId=111; //Cannot assign to 'studentId' because it is a read-only property.

//change the school name with static method .

Student.changeSchoolName("Madhav Vidhiya Niketan Sec Sec School");

console.log("Displaying student info after changing school name...");
s1.displayInfo();
s2.displayInfo();

//access through object
//s1.schoolName="KV  High school"; //Property 'schoolName' does not exist on type 'Student'. Did you mean to access the static member 'Student.schoolName' instead?
//s1.changeSchoolName();//Property 'changeSchoolName' does not exist on type 'Student'. Did you mean to access the static member 'Student.changeSchoolName' instead?