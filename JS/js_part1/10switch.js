
//The switch statement evaluates an expression, matching the expression's value to a case switch(x) x is the variable to comare  
let num=0;      //here num is work like x

//0-sunday , 1-monday ,2-tuesday ,3-wednesday ,4-thursday ,5-friday ,6-saturday 

switch(num){        //switch store num and check run case which meet or equal to num
    case 0:                                                         //here as case 0 and num is also 0 so inside this case 
        console.log("it's sunday.  Woila");    
        break;                     
    case 1:                                                         //if we didn't put break statement then every case after a true case will execute 
        console.log("it's monday. shitt workday");
        break;
    case 2:
        console.log("it's tuesday. need to go hanuman temple");   
        break; 
    case 3:
        console.log("it's wednesday. half of workday gone");
        break;
    case 4:
        console.log("it's thursday. tommorow is friday.");
        break;
    case 5:
        console.log("it's friday or triday night");
        break;
    case 6:
        console.log("ahh saturday here's it come");
        break;
    default:                                                        //default case run when non of any case is true then default excute without any case
        console.log("hey,it's wrong input");
    
}

//another example try to figure it out by self
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
//predict the output
