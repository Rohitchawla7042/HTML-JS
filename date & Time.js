console.log("checked!!");
// function displaytime(){
//     time = new Date();
//     console.log(time);
//     document.getElementById('time').innerHTML = time;
// }
// setInterval (displaytime,1000);

let now = new Date();
console.log(now);
let now1 = new Date(0);
console.log(now1);

// let newdate = new Date("2022-04-29");
// let newdate = new Date(year, month, date, hours, minutes,seconds); 
let newdate = new Date(2040, 6, 27, 10, 14,13); 

console.log(newdate);

let yr = newdate.getFullYear(); 
console.log("The year is " , yr);

let date = newdate.getDate(); 
console.log("The date is ", date);

let minutes = newdate.getMinutes(); 
console.log("The minutes are ", minutes);

//  For Setting any date 

newdate.setDate(22); 
console.log(newdate); 
setInterval (updatedtime,1000);
function updatedtime(){

time.innerHTML = new Date();
// console.log(updatedtime);
}