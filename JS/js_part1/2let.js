'use strict';

//let is also use to declare a variable but it is block-scoped local variable 
//let keyword is introduced after ES6(2015) released
let h=1;
console.log(h);         //output==1

if(h==1){               
    let h=2;            //new h is created inside this block value 2 which automatically destoyed after block end 
    console.log(h);
}
console.log(h);         //the h of value 1 is printed here 

//cannot declare twice same name variable in let but can declare in var
let myname='Mukund';
// let myname="Mukund";        //give an error as myname is already defined

var mynme="mukud";
var mynme="mkud";          //excuted successfully
console.log(mynme);         //print mkud

