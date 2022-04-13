//primitive and referenced type

//primitive -numbers, strings, booleans, null, and undefined.
//it is stored on a stack.
let a=100;      //a has value 100
let b=a;        //b also get value same as a i.e 100

a=80;
console.log(a);         //output-80
console.log(b);         ////output-100
//as we see premitive data types doesn't point to another data type they just get the value from pointed

//referenced daya type
//referenced -arrays, functions, collections, and all other types of objects.
//as referenced data type size is not fixed they are stored in heap memory 

let m=['hello',19,'i am here',false,'no'];
let n=m;
m[0]='hi';
console.log(m);     //['hi', 19, 'i am here', false, 'no']
console.log(n);     //['hi', 19, 'i am here', false, 'no']
//now as referenced daya type size is not fixed they are stored in heap 
//and when new object is pointing to them then they won't create extra space to store them just pointed to same object.

//for more explanation --https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript/
