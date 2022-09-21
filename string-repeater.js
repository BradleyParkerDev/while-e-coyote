const prompt = require('prompt-sync')({sigint:true});

console.log("Enter a string: ");
let str = (prompt('> '));
let sum = "";
let x = Number(str.length);
//console.log(x)

while(sum.length <= 10 ){
    sum = sum + str;
    x = Number(sum.length);
    console.log(sum);
    //console.log(x);
        
}


