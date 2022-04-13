//*iterables
//those object in which we can apply for of apply 
//like--array,string are iterables

//*array like objects 
//object in which we can apply length properties
//and also can access using their index
//ex-string

//*sets(it is iterable)
//store data
//have it's own method
//no index based access
//order is not gurantee
//unique item only
let number=new Set([2,4,3,1]);
number.add(2);     //ignore these as 2 is alredy in number set
console.log(number.has(2));     //return true as it has value 2 in set
for(let iteam of number){
    console.log(iteam);         //print 2 4 3 1
}
console.log(number);

//Map (Data structure)  ,it is an iterable
//used to store key value pair same like object but object can't have key as number,function,object  but Map have these as key
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));     // output: 1

map1.set('a', 97);              //add key and value

console.log(map1.get('a'));     // expected output: 97

console.log(map1.size);         // expected output: 3

map1.delete('b');

console.log(map1.size);         // expected output: 2

//learn more methods of Map from here   ---https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
//optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.
//when you accessing object inside object and you don't want error instead of error should return undefined to run the script use optional chaning
const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };
  
  const dogName = adventurer.dog?.name;
  console.log(dogName);         // expected output: undefined
  
  console.log(adventurer.someNonExistentMethod?.());