//create a function that takes all the properties of employess name,lastname,address,salary,position,gender .
function employess(firstname,lastname,address,salary,position,gender){
    let obj={};
    obj.firstname=firstname;
    obj.lastname=lastname;
    obj.address=address;
    obj.salary=salary;
    obj.position=position;
    obj.gender=gender;
    obj.issalary=function(){
        return this.salary;
    }
    return obj;
}
let emp1=employess("Mukul",'Thakur',"Shalimar bagh",1900000,"SDE","Male");
console.log(emp1);
//instead of creating method for every employee we can store a reference variable which point to a funcion who store this method so less space is used.
const method={
    salaryhike:function(){
        return this.salary;
    }
}
function employess2(firstname,lastname,address,salary,position,gender){
    let obj={};
    obj.firstname=firstname;
    obj.lastname=lastname;
    obj.address=address;
    obj.salary=salary;
    obj.position=position;
    obj.gender=gender;
    obj.salaryhike=method.salaryhike;
    return obj;
}
let employ=employess2("Mukul",'Thakur',"Shalimar bagh",1900000,"SDE","Male");
console.log(employ.salaryhike());


