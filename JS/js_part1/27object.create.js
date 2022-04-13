let obj1={
    key  :'value1',
    key2 :'value2'
}
let obj2={
    key : 'valueobj2'
}
console.log(obj2.key2);     //it will print undefined as there is not any key2 present in obj2.

//now 
let obj_1={
    key_1:'val1',
    key_2:'val2'
}
let obj_2=Object.create(obj_1);
console.log(obj_2);             
//output: {}
//[[prototype]]:object
//      key_1:'val1',
//      key_2:'val2'

//Obejct.create --this method creates a new object, using an existing object as the prototype of the newly created object.
//by these when we try to access any key which is not present in obj_2 so it will check in his proto object and if find then print it
console.log(obj_2.key_1);       //output--val1
console.log(obj_2.__proto__)    //you can check proto of an object 
//__proto__ this and [[prototype]] is same but not these is same prototype.

//another example for Object.create()
const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();
  // expected output: "My name is Matthew. Am I human? true"
  
