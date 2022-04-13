//MAP-REDUCE-FILTER
//map method---creates a new array populated with the results of calling a provided function on every element in the calling array.
//simple defination-- apply on existing array and change the value using function of iterating all the element

let arr=[4,3,8,12,45,22,1,23];

let newarr=arr.map(value => value**2);      //it iterate to the array like for each loop and do the action on each element and return the new arr.
console.log(newarr)

//or
let arr1=[32,1024,65,36,91,14,81];

function root(element){
    return element**0.5;
}

let sqrt=arr1.map(root);
console.log(sqrt);

//filter --method creates a new array with all elements that pass the test implemented by the provided function.
//filter will take only element which is returned as true in the function
let arr3=[12,32,5,3,5,121,34,95];

let small=arr3.filter(val=>val>30);     //take every element which is more then 30
console.log(small);

//another example for filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);       // take only those word having length more then 6
console.log(result);


//Reduce method 
let arr4=[90,77,57,4,29,19];
let sum=arr4.reduce((first,second)=>first+second);
//reduce work like taking first index in first and second in second and do operation then take result into first ,second will take then every index element till last
//first     second      return(first+second)
//90        77          90+77=167
//167       57          167+57=224
//224       4           224+2=228
//228       29          228+29=257
//257       19          257+19=276
//276 is return as final ans
console.log(sum);

//real life example for reduce method
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue)
  }
  return previousValue
}, [])

console.log(myArrayWithNoDuplicates)
