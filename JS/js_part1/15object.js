//object
let obj={                            //object store key value pair
    name:"Mukund",
    age:18,
    skills:['java','html','css','js']
};    
console.log(typeof obj);            //it will print object as tht type is object
//using dot(.) after object name you can access properties of object
console.log(obj.name+" "+obj.age+obj.skills)    //Mukund 18java,html,css,js
console.log(obj.skills[2])                      //css
//adding a propertie or key value pair in object 
obj.experience='2yr'
console.log(obj)        //Mukund 18 java,html,css,js 2yr

//you can access and add properties using sq bracket as well
console.log(obj["skills"]);         //print skills array 
obj["gender"]="m"
console.log(obj)

//for in loop in object
for(let i in obj){
    console.log(obj[i]);        //use sq bracket instead dot method 
    //console.log(obj.i);         //error-undefined as obj.i is not a key but obj[i] is act like obj[name],obj[age]..
}


//spread operator in array just example before using spread operator in object 
let arr=[..."0123456789"];  //it will create arr=[0,1,2,3,4,5,6,7,8,9];
console.log(arr);       

const arr1={key1:"mayval",key2:"marvel"};
const arr2={key1:"overide old key1 value ",key2:"marvel universe",key3:"practice"}
const finalarr={...arr1,...arr2};
console.log(finalarr);  //{key1:"overide old key1 value ",key2:"marvel universe",key3:"practice"}
//not two same key will exist in a object so it will overide the old value by the new one 
const revarr={...arr2,...arr1};
console.log(revarr);    //{key1:"myval" , key2:"marvel",key3:"practice"}

