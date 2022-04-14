console.log("JSON worked!!!")

// JSON is used to transfer the object from one network to another network
 
let JSONobj = {
    name : "Rohit", 
    Roll_No:"Twenty second",
    friend :"Hey!!"
}

// Now it converted into string as first it was object and now it is string 
console.log(JSONobj);
myJsonStr = JSON.stringify(JSONobj);
console.log(myJsonStr);

// If we want to replace the content of string 

myJsonStr = myJsonStr.replace("Rohit", "Naman"); 
console.log(myJsonStr);


// now i want to convert into object again 

newJsonObj =JSON.parse(myJsonStr);
console.log(newJsonObj);

