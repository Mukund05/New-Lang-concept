//clone array
let a=[1,"3",`helloworld`,true];
// let b=a;        //it will not give us clone of a .it just point it to array a
let b=[1,"3",`helloworld`,true];    //copy pasting is also a way but what if size of array is too much.
//so here we can use 
let c=a.slice(0);           //slice will give new array from a array after index 0
console.log(a);
console.log(c);

let d=[].concat(a);     //concat -The concat() method is used to merge two or more arrays.,here first one is blank array and second is a
console.log(d);

let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
let array3 = array1.concat(array2);
array1.push('hello');
console.log(array1)
console.log(array3)                 //output--[a,b,c,d,e,f]

//another way is spread
let newarray=[...array2];           //put threed dot and name of array to copy the object 
console.log(newarray)
//for of loop
let fruit=['mango','apple','grapes'];
for(let here of fruit){         //here let will create a pointer of which get element from fruit of index 0 and loop run till last element
    console.log(here);
    break;
}
//for in loop
let box=['bag',`clothes`,'shoes','belt'];
for(let index in box){          //here index have index no from 0 to box.length-1 
    console.log(box[index]);
}
//array destructuring
const arr=['hello','hey'];
let [val1,val2]=arr;    //val1 will get arr[0] value and val2 will get 
console.log(val1,"   ",val2);

const arr2=['hello','hey','hii'];
let [m,,n]=arr2;
console.log(m," ",n);       //m--arr[0] and to skip an element put a comma(,) and then n--arr[2]



