//a set of statements that performs a task or calculates a value .it should take some input and return an output 
//A function definition (also called a function declaration, or function statement) consists of the function keyword,
//The name of the function --ex wish

function wish(){                
    console.log("happy birthday dear");     //anything in function body which is going to be excuted when function is called
}
wish();         //name of function with bracket will call function and excute whatever in that function-ex wish will print happy birthday

//function to find sq. of any no.
//The function square takes one parameter, called number. The function consists of one statement that says to return the parameter of the function (that is, number) multiplied by itself. The statement return specifies the value returned by the function:
function square(number) {
    return number * number;
}

let mysq=square(5);     //here square function receive 5 and multiply it by it'self and return that value to mysq
square(2);              //as nobody here to take that return value from square
console.log(mysq)

let varsum=function(n1,n2,n3){
    return n1+n2+n3;
}
let getsum=varsum(2,3,4);
console.log(getsum);

//arrow function
let str=anystring =>anystring[0];
console.log(str("mukund"));
//ex
const k=(a,b) => a + b + 100;
console.log(k(10,22))

//function hoisting : Hoisting allows functions to be safely used in code before they are declared.
//Variable and class declarations are also hoisted ,Note that - doing so can lead to unexpected errors, and is not generally recommended.

printmyname();  //calling a function which is not yet declared 
//it means at the time of comiling the function is hoisted to above all the program so it can call anywhere same with variable and class
function printmyname(){
    console.log(`hey my name is mukund`);
}

// but hoisting cannot performed in function of referenced type ex
hey();
let hey=function(){
    console.log('i am not excuteable')
}
  

