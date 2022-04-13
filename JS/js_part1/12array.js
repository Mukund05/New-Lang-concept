//Array- storing a collection of multiple items under a single variable
//in array objects store from inndex 0 and last till you store
let a=["hello",16,"how-how",false,`you`]
console.log(a[0])       //output--hello
console.log(a[1])       //output--16
console.log(a[2])       //output--how-how
console.log(a[3])       //output--false
console.log(a[4])       //output--you

//chnaging object at a index 
a[0]='hi';
console.log(a);         //['hi', 16, 'how-how', false, 'you']

//to add a element in array from last index 
a.push(9102);
console.log(a);         //['hi', 16, 'how-how', false, 'you', 9102]

//to remove element from array from last index
let j=a.pop();          //a.pop remove last element from array and give it to j element
console.log(a);         //['hi', 16, 'how-how', false, 'you']
console.log(j);         //9102

console.log(a.reverse());   //reverse will reverse the array 
