//closures : closure gives you access to an outer function's scope from an inner function
let name='mukund';
function call(){
    // var name='mukul';
    let callme = () => {console.log(name)}      //it will print mukul what if name inside call function is commented then will print mukund
    callme();
}
call();
//whenever anything called first it will check inside the function where it was called if not found then search outside the func. same will going on till  variable is not found this is called lexical scope.

//if you not want to avoid closures use let and const
//let and const are block scope it can only access inside the block of the function 
//but var is function scope can access anywhere in the whole code 
{
    //let myname='mukund';    //you can access myname only inside these block
    var myname='h'

} 
console.log(myname);    //give error as myname not defiend but if var is defined;


  