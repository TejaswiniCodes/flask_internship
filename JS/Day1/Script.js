let name="teja";
let age=20;
let isStudent="true";
console.log(name);
console.log(age);
console.log(isStudent);
console.log("\n");

//conditional statements
//if statement
if(age>=18){
    console.log("Eligible for vote");
}
console.log("\n");
//if-else statement
if(age>=18){
    console.log("Eligible for vote");
}else{
    console.log("Not eligible for vote");
}
console.log("\n");
//else if
if(age>=18){
    console.log("Eligible for vote");
}else if(age>=16){
    console.log("After 2 years eligible for vote");
}else{
    console.log("Not eligible for vote");
}
console.log("\n");

//loops
//for loop
for(let i=0;i<=15;i++){
    console.log(i);
}
console.log("\n");

//while loop
let i=0
while(i<=5){
    console.log(i);
    i++;
}
console.log("\n");
//do-while loop
do{
   console.log(i);
    i++; 
}while(i<=5)
console.log("\n");

//function
function add(a,b){
    return a+b;
}
console.log(add(25,35));
console.log(add(22,34));
