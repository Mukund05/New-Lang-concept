//oop-object oriented programming
//    -used to write good quality code
//    -used in every prog. lang 

//classes and objects
//class --Class is a user-defined datatype that has its own data members and member functions
//what if we want to store a student data in a single data type but there is not any data type to store all info of a student so creating a class can access multiple data type in that object
//object are thoes who get the assigned to the properties of class --objects are the instance of the class
 /*public class class_obj{
    public static class student{        //created a class of student and giving all the properties of a student can have
        int rollno;
        String name;
        boolean passed;
        char gender;
    }
    
    public static void main(String[] args){
        student mohit=new student();              //assigning every proprties to new student mohit so he can have that properties to use
        mohit.rollno=1722;
        mohit.name="Mohit Pandit";
        mohit.passed=true;
        mohit.gender='M';
        System.out.println(mohit.rollno);
        System.out.println(mohit.name);
        System.out.println(mohit.passed);
        System.out.println(mohit.gender);
    }
    
}
*/

//counstructor- is used to initialize the object properties their value  ,it is  called when an instance of the class is created

//if there isn't any counstructor is made then java will calls a default countsructor but if we create our own counstructor then it is know as parameterized counstructor and then we can't use default counstructor but can create our own defualt counstructor
//rules of counstructor --counstructor name is same as its class name
//                      --A Constructor must have no explicit return type
//                      --A Java constructor cannot be abstract, static, final, and synchronized

public class class_obj{
    public static class student{
        int rollno;
        String name;
        char gender;
        student(int roll,String name, char gender){     //it is parameterized counstructor 
            this.rollno=roll;
            this.name=name;
            this.gender=gender;
        }
        student (){                                     //this is default counstructor if we create parameterized counstructor then defualt is not accessible untill we create our own default counstructor

        }
    }
    public static void main(String[] args) {
        student mukul=new student(1733,"mukul",'M');
        System.out.println(mukul.rollno);
        System.out.println(mukul.name);
        System.out.println(mukul.gender);
    }

}