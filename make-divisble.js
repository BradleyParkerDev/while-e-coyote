const prompt = require('prompt-sync')({sigint:true});

console.log("Enter x: ");
let x = Number(prompt('> '));

console.log("Enter y: ");
let y = Number(prompt('> '));
//let x2 = x;


while(x % y !== 0){

    x+=1; 

}

console.log(`${x} is divisible by ${y}`)

