//creating method
//function inside object is method

let person={
    firstname:"Mukund",
    age:19,
    about: function(){
        // console.log(`hey i am ${firstname} and age is ${age}`);     //here we get an error as firstname and age is not defined in method 
        console.log(`hey i am ${this.firstname} i am ${this.age} years old.`);  //it will print when function is called
    }
}
console.log(person.about());            //nothing returning from the func about so print undefined 
//output
// hey i am Mukund i am 19 years old.
//undefined

//this keyword use to point the object for which it was called
function printinfo(){
    console.log(`hey i am ${this.name} and i am ${this.age} years old.`);
}
let p1={
    name:"Mukund",
    age:19,
    info:printinfo
}
let p2={
    name:"Aish",
    age:22,
    info:printinfo
}
p1.info();          //hey i am Mukund and i am 19 years old.
p2.info();          //hey i am Aish and i am 22 years old.

