//super()-used to invoke immediate parent class constructor
//super - used to invoke immediate class method 
//super -can't invoke the parent class properties .(In Java, It is possible)
class Parent
{
    num:number=10;

    constructor()
    {
        console.log("This is a Parent class constructor");
    }

    display()
    {
        console.log("This is a display()  method from the parent class..");
    }

}   
class Child extends Parent
{
    num:number=20; //overrriden property

    constructor()
    {  
       super() ; //this will call parent class construtor (must be called )
       console.log("This is a Child class constructor");
    }

    show()
    {   
        //console.log(super.num); //parent's num //T.S does not support super.num to access parent class properties directly like java does .
        console.log(this.num); //20
        console.log("This is a show() method from the child class..");
    }

    //overrided method
    display()
    {   super.display(); //this will invoke the parent class method
        console.log("This is a display()  method from the child class..");
    }
}


let c1=new Child(); //This is a Parent class constructor
                    //This is a Child class constructor

c1.show();       //child class              

c1.display(); //child class
c1.display();
