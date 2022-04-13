//sort method sort the array on the basis of their ASCII value.
//https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html          --reference for ascii table
let arr=[3,2,6,57,8,436,23];
arr.sort();
console.log(arr)        //[2, 23, 3, 436, 57, 6, 8] after sort 

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);    //['Dec', 'Feb', 'Jan', 'March']

//to sort a number we can use these function in sort
arr.sort((a,b)=>a-b);
console.log(arr);

//real-life example
let price=[
    {productid:1 ,product_name:'laptop',rate:12000 },
    {productid:2 ,product_name:'TV',rate:11110 },
    {productid:3 ,product_name:'Smart',rate:4900 },
    {productid:4 ,product_name:'charge',rate:2000 },
    {productid:5 ,product_name:'battery',rate:7600 },
]
price.sort((a,b)=>a.rate-b.rate);       //these will sort from lower to higher price
console.log(price);

price.sort((a,b)=>b.rate-a.rate);       //these will sort from higher to lower price
console.log(price);

price.sort(function(a, b) {
    var nameA = a.product_name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.product_name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
});
console.log(price);

//find method
//--returns the first element in the provided array that satisfies the provided testing functionif not found then return undefined
//
let name = ['akshay','sumeet','saif','areana','kate'];
let result=name.find((string)=>string.length==4);
console.log(result);            //output --saif ,as it is first occure element in array whose length is 4

//every method--tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
let cart=[
    {basket:1,item:'fruit',mrp:333},
    {basket:2,item:'vegetables',mrp:199},
    {basket:3,item:'shakes',mrp:120},
    {basket:4,item:'ice-creams',mrp:499}
]
let istrue=cart.every((baskets)=>baskets.mrp<500);      //return me false if any iteam mrp is more then 500 else return true
console.log(istrue);
//Check if one array is a subset of another array
const isSubset = (array1, array2) => array2.every(element => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

//some method -- tests whether at least one element in the array passes the test implemented by the provided function return true else return false
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));

//Fill method -method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
let myarr=[32,54,768,734,23,5,2];
let filledarr=myarr.fill(-1,2,4);
console.log(filledarr)          //[32, 54,-1, -1, 23, 5, 2]
//fill(value)   --fill every element with the value
// fill(value, start)   --fill value from start element to end
// fill(value, start, end)  --fill value from start index to end index


//splice method --these method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const month = ['Jan', 'March', 'April', 'June'];
month.splice(1, 0, 'Feb');
console.log(month);             //["Jan", "Feb", "March", "April", "June"]

let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum', 'guitar')     ///from index 2 remove 0 element but add drum and guitar in the array
