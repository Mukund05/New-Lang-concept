//and(&&) or(||)

let name="Mukund"
let age=20
//&& operator gives you  power to compare many codition and if all the condition are true then execute 
if(name[0]=="M" && age>18){                 //here both condition are true so if block is running
    console.log("i guess you are Mukund");
}else{
    console.log("can't guess");
}

//or operator also gives you power to compare many condition but if any of its condition is true then if is excuted

if(name[0]=="M" || age<18){
    console.log("you are Mukund");
}else{
    console.log("who are you")
}

//expresion which are consider as false are
//empty string ""
//null
//undefined
//false
//0
//NaN


//there are too much operator in js just go through them once 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators