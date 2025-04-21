const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    console.log(line.split('').map((s) => s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase()).join(''));
}).on('close',function(){
    str = input[0];
});