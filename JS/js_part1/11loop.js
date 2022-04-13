//while loop -A while statement executes its statements as long as a specified condition evaluates to true.
let num=1;
while(num<10){                                            //num is 1 so statement true so code excute ,everytime num++ will increase num value 
    console.log(`yes num is bigger num is ${num}`);     
    num++;                                                //num++ is same like num=num+1; just it do that increase value when used second time
}   
//as long as num is smaller then 10 code will exexcute it self again and again but when num became 10 loop break as codition is fasle;

//for loop
for (let index = 0; index < 10; index++) {
    console.log(`hey index is equal to ${index}`);
}
//for loop will initailised(let index=0) once a variable but check condition(index<10) everytime and increment(index++) everytime 

//continue and break statement
//continue -The continue statement can be used to restart the loop without excuting anything after continue statement 
//break -Use the break statement to terminate a loop,

//Learn about loop in deep here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration