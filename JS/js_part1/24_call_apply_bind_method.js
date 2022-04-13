//call-The call() method calls a function with a given this value and arguments provided individually.
function hello(){
    console.log(`I am ${this.name} from ${this.place}`);
}
let  emp1={
    name:'Mukund',
    place:'Delhi',
    intro:hello
}
let emp2={
    name:'Mohit',
    place:'UP'
}
emp1.intro();       //emp1 has a method which call function hello so we here answer will be. I am Mukund from Delhi
emp1.intro.call();  //emp2 doesn't have any method which calls hello function but using call we can call hello using emp1 and pass emp2 as object which receive in this

//apply--This method calls a function with a given this value, and arguments provided as an array (or an array-like object).
function value(num,nums){
    console.log(`here's it comes`,num ,`and`,nums);
}
value.apply(emp1,['hello',23]);     //output--here's it comes hello and 23

//bind--The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
let user1={
    name:'Goku',
    power:'MUI',
    attack: function(){
        console.log(this.name,this.power);
    } 
}
let aquirestamina=user1.attack;
aquirestamina();                            //give you undefined as acquirestamina is not a function so user1.attack give whole code to acquirestamina which and at the time of printing it print this as undefined
let acquirepower=user1.attack.bind(user1);  //bind will act give acquirepower his this as user1
acquirepower();

//another example of bind method.
this.x = 9;    // 'this' refers to global 'window' object here 
const module = {
    x: 81,
    getX: function() { 
        return this.x; 
    }
}; 
  
module.getX();  //  returns 81

const retrieveX = module.getX;
retrieveX();        //returns 9; the function gets invoked at the global scope
const boundGetX = retrieveX.bind(module);
boundGetX();




