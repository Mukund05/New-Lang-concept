//javascript function--->function+object
//prototype is a space provided in every javascript function by which we can use it to do some extra works
function world(){
    console.log('Earth');
}
console.log(world.prototype);   //will show you function prototype 
if(world.prototype){
    console.log('prototype exists');
}else{
    console.log("doesn't exists");
}
world.prototype.abc='hello';        //you can store anything in these free space of prototype of function
console.log(world.prototype.abc);
world.prototype.intro=function(){
    console.log("hey i am an alien 😸");
}
world.prototype.intro()
//so we know that there is a free space we can use it 

//example
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);// {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function (){
    return this.age >= 18; 
}
createUser.prototype.sing = function (){
    return "la la la la ";
}
const user = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user);
console.log(user.is18());
