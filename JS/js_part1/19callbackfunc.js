//callback - function passed into another function as an argument
function greeting(name) {
    alert('Hello ' + name);
}
  
function processUserInput(callback) {       
    // var name = prompt('Please enter your name.');
    callback(name);     //you can access function with the name you received
}
  
processUserInput(greeting);         //function is called and also function is passed as a parameter 

function myFirst() {
    console.log("Hello");
}
  
function mySecond() {
   console.log("Goodbye");
}
  
  myFirst();
  mySecond();
  