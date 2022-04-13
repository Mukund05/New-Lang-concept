
//default parameter :-it  allow named parameters to be initialized with default values if no value or undefined is passed.
function sum(a,b){
    return a+b;
}
console.log(sum(2,8));  //work fine and gives 10 as output 
//but if one of the parameter is not receving anything
console.log(sum(2));    //give error as NaN not a number 
//so to handle these we use default parameter if nothing is received then take that value
function mul(a,b=1){    //here if b will not receive any value then it will take default value which is 1 
    return a*b;
}
console.log(mul(4));    //output:4

//rest parameter : allows a function to accept an indefinite number of arguments as an array
function param(a,b,...c){
    console.log(a+" "+b+" "+c)
    let total=a+b;
    console.log(total)
    for(let num of c){
        total+=num;

        console.log(total)
    }
    return total;

}
//here a will store -1 b-2 and else everything is stored in c 
console.log(param(1,2,3,4,5,6,7,8,9));


