//he new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
Car.prototype.engine=function(){
    console.log("boom boom")
}
  
  const car1 = new Car('Eagle', 'Talon TSi', 1993);
  
  console.log(car1.make);
  // expected output: "Eagle"

  //new keyword --
  //Creates a blank, plain JavaScript object.
  //Adds a property to the new object (__proto__) that links to the constructor function's prototype object
  //Returns this if the function doesn't return an object.

for(let num in car1){
    console.log(num);
}
//output--make,model,year,engine
//so if we don't want to print engine as its in prototype
for(let num in car1){
    if(car1.hasOwnProperty(num)){
        console.log(num);
    }
}
//hasOwnProperty check wether these is own properties if yes then return true