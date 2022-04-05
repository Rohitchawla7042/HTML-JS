console.log("loops");
let i = 0;
for(i=0;i<4;i++){
    console.log(i);
}

let array = ["Rock","Hello","Name","Joker", "Dev"]
// for (let index = 0; index < array.length; index++) {
//     let element = array[index];
//     console.log("Hello Freinds "  +  element);
    


// array.forEach(function f(element) {
//     console.log("Hello Freinds " + element)
    
// });
 
// For of loop 

// We are using loops to iterathe araay elements , but if we want to iterate the objects , then what we have to do 

for (element of array) {
    console.log("Hello Freinds  " + element + " The new modern era of iteration"); 
    
}

// For iterating objects we are using for in loop  

let employee = {
    name : "Rohit",
    Salary : 3333, 
    Age : 22
}
for (key in employee) {
    console.log(`The ${key} of the employee is ${employee[key]}`);
        

}

// while loop in Js 

let num = 0; 
while (num<4) {
    console.log(`${num} is less that 4 `)
    num++;
}
let num1 = 20;
do {
    console.log(`${num1} is less that 4 `);
    num1++;
} while (num1 < 6);
 


