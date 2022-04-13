//typeof givs us the data type of variable 

let i="89"
console.log(typeof i)   //output--string, as i store 89 as a string because of ""
i=89;
console.log(typeof false) //now i store number so output is number

//there are few data types which are
//number        --console.log(typeof 78)
//boolean       --console.log(typeof false)
//string        --console.log(typeof "java")
//undefined     --console.log(typeof anything)
//Symbol        --console.log(typeof Symbol())
//function      --console.log(typeof Math.sin)
//object        --console.log(typeof null)

//convert number to string
let j=90;
console.log(typeof j);      //number
j=j+""                      //adding string into number will create a string
console.log(typeof j);      //string 

//convert string to number
let k="78"; 
console.log(typeof k);      //string
k=+k;                       //adding + to string create a number
console.log(typeof k);      //number
 //or 
let m="7"
m=Number(m);                //number method will also work same like +
console.log(typeof m) 
//or 
let s="89";
console.log(typeof s)
s=parseInt(s);              //parseInt also work same for string to convert string to number
console.log(typeof s)