console.log("Hello , please check");

var string = "Hey!"; 
var name = "hi"; 
console.log(string);
var temp = `${string} please have a look over this and it got successfully compiled which is called ${name}`;
console.log(temp);
var len = name.length; 
console.log(`length of the string is ${len}`); 
console.log("Hello world\n hey!!"); 

// String functions


var str = "Rohit is fine";
console.log(str);
var position = str.indexOf('i');
console.log(position);
position = str.lastIndexOf('f');
console.log(position);
// substring of a string 
var substr = str.slice(1,3);
console.log(substr)
// replacing a value 

// console.log(str) as it replaced fine with nice
var replace = str.replace('fine', 'nice');
console.log(str);
console.log(replace);

// uppercase and lowercase 

console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

// concat method 

var newstring = str.concat(' and good');
console.log(newstring); 


// to remove whitespaces 

var stringWith = "      Hello             bhxjsxhjjdkxqxdk       jnkjbhjkjb   ";
console.log(stringWith)
console.log(stringWith.trim());

// extract char from string 

var char1 = str.charAt(2);
console.log(char1);
