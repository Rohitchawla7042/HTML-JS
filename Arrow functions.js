console.log("Checking!!!");
// normal function 
function greet(){
    console.log('Good morning ')
}

greet();

// Arrow function => as it's a shortcut for creating functions 

let greet1 = ()=> {
    console.log("Hey!!")
}
greet1();

// benefit of this arrow function is this that we don't have to create the function name and then we have to enter into that function 
setTimeout(() => {
    console.log("Welcome to settomeout");
}, 2000);


let sum = (a,b) => {
    return a + b;
}
// another shortcut 

let sum2 = (a,b) => a + b ; 

let half = a => a/2; 

let obj1={
    greeting: "Good Morning ",
    names: ["Rohit", "Harry", "Naman"], 
    speak(){
        this.names.forEach((student)=> {
            console.log(this.greeting + "Hey " + "how are you " + student);
        });
    }

}
obj1.speak();
   