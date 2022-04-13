//the concatenation operator (+) concatenates two string values together
let val1="19";
let val2="20";

//guess the answer
console.log(val1+val2)      //1920
console.log(+val1 + +val2)  //39

val1+="839";                //+= work same like val1=val1+"839"
console.log(val1)           //19839

//template string(`)  --Template literals are enclosed by the backtick (` `) in which we can use  placeholder ${expression}
let i="Mukund Thakur";
let age=20;

let self=`hey i am ${i} and i am ${age} years old`      //here ${i} and ${age} are placeholder in template literals 
console.log(self)                                       //hey i am Mukund Thakur and i am 20 years old

let b;
console.log(typeof b)

//boolean expression 
let x=79;
let y=89;
console.log(x<y);           //x<y will give compare and give true if statement true else false  output--true
console.log(x>y);           //output--false
y=79;
//==                        //check only for value doesn't care for data type
console.log(x == y);        //compare wether same if same print true else print false
y="79"
console.log(x == y)         //as ==  doesn't care about data type it only compare with value , return true as x has value 79 and y have string 79 but 79 as value
console.log(x === y);       //=== this compare with data type as x is number and y is string so output will be false
//!=    not equal to 
console.log(x!=y);          //this will give true is x is not equal to y 
console.log(x!==y)          //this will also check data type and equality as well


