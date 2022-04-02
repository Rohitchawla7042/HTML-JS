console.log('Functions in Js');
// functions in Js 

function greet(name, greetText = " this is the new text"){
    console.log(greetText + " " + name)
    console.log(name  +  " gone");
}
let name = "rohit";
let name1 = "rohit";
let name2 = "rohit";
let name3 = "rohit";
let greetText = "hello, how are you";
greet(name,greetText);
greet(name1,greetText);
greet(name2,greetText);
greet(name3,greetText);
greet(name3) 
// as in above we haven;t give any  pass any greettext in last name so it will take the name automatically which is in the scope . 

function sum(a,b,c){
d= a * b* c; 
return d; 
}
let returnvalue = sum(4,5,6)
console.log(returnvalue)
// For returning in functions 


