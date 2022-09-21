const prompt = require('prompt-sync')({sigint:true});

console.log("Enter a number: ");
let num = Number(prompt('> '));
let sum = 0;

while(num <= 100 ){
    num*= 2;
    if(num < 100){
        console.log(num);
    }
}
