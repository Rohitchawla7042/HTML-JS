console.log('Loops');
// Variable in js 

// This second string got overpower of first string and it prints second string 
var string = "this is the 1st string";
var string = "this is the 2nd string";
console.log(string);

// now we use thge concept of let to declare any variable as first we use var now we will use let 

let a ='u'; {
    console.log(a);
}
// let a ='u4';
// Identifier 'a' has already been declared this is the error is coming we can not declare the same variable such as a 

let b ='Hello';
{
    let b = 'Hi'
    console.log(b);
}
console.log(b);

// Constant 

const c ="This can not be changed"; 
console.log(c); 

// Conditions if else 

let age = 19; 
if(age>20){
    console.log('You are older as your age is',age);
}
else if(age==15){
    console.log("You can drink as your age is",age)
}
else {console.log('You are younger as your age is',age);}


// Switch Case statements 

const cups = 4; 
switch (cups) {
    case 4:
        console.log("The value of cups is 4")
        break;
    case 41:
        console.log("The value of cups is 41")
        break;
    case 42:
        console.log("The value of cups is 42")
        break;
    case 43:
        console.log("The value of cups is 43")
        break;
    case 44:
        console.log("The value of cups is 44")
        break;

    default:
        console.log("The value of cups are not in the above values ")
        break;
}






