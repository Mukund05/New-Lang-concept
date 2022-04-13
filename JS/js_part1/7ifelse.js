//if --The if statement executes a statement if a specified condition is truthy.

let i=18;       
if(i%2==0){         //if statement only excutes it's block when i%2==0(which means if i divided by 2 and remainder will 0)
    console.log('even')
}

//we can use if-else both 
let j=19;
if(i>j){
    console.log('number');   
}else{
    console.log('not number')
}
//else will excute its block if the if condition fasle 

// if (condition) {         //condition (An expression that is considered to be either truthy or falsy.)
//     statement1
//  } else {                //if condition not satisfy then else will work 
//     statement2
//  }

//if you have many condition for code then you can use else if

let k=19;
if(i==j){
    console.log('i is equal to j');
}else if(i==k){
    console.log('i is equal to j');
}else if(j==k){
    console.log('j and k are equal')
}else{
    console.log('i think i is not equal to anyone')
}
//you can use multiple else if as per your need must care add space between else if() don't use elseif()

//ternery operator condition ? executeIfTrue : executeIfFalse 
let n=19;
let s=n>18?"true":"false"       //here we can see if n is greater then 18 then true is store in s else false is store in s
console.log(s);
//ternery is short form of if else 
