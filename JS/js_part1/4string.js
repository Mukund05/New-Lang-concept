//trim()            --The trim() method removes whitespace from both ends of a string and returns a new string
//toUpperCase()     --The toUpperCase() method returns the calling string value converted to uppercase and convert to string if it's not a string
//toLowerCase()     --The toLowerCase() method returns the calling string value converted to lower case.
//slice()           --The slice() method extracts a section of a string and returns it as a new string.


//trim()
let name="  Mukund    "
console.log(name.length);       //it will print length of string including character and whitespace i.e -12
name.trim();                    //as string are immutable so trim cannot do anything store modified string 
console.log(name.trim());       //return trim string
name=name.trim();               //store trim string in the same string
console.log(name.length);       //now name length reduced as whitespace are remove. output will be 6

//toUpperCase()                 
let myname='mukund';            //myname store mukund which is lower case
myname.toUpperCase();           //as this method also return string not modified the string 
console.log(myname)             //same output i.e--mukund
myname=myname.toUpperCase()     //now myname store string which is return from touppercase method 
console.log(myname)             //now output will be MUKUND

//toLowerCase() --this method is same as uppercase just lower all string character and return string but didn't modified string
console.log('ALPHABET'.toLowerCase());  // 'alphabet'

//slice(i,j)        give you string from starting index i to ending index j-1 
//slice(i)          give string from i to string length
//slice(-i)         give string from backward
let st="hello i am newbie to programming";
console.log(st.slice(-11));     //output--programming
console.log(st.slice(6,17));    //output--i am newbie
console.log(st.slice(6));       //output--i am newbie to programming
console.log(st.slice(-21,-12)); //output--newbie to




//there are many more methods but these are most used you can study more from here--https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String