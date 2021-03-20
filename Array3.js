let number = process.argv;
let array = new Array();
while(number[2] % 2 == 0) {
    array.push(2);
    number[2] /= 2;
}

for(let i = 3; i*i <= number[2]; i++) {
    while(number[2] % i == 0) {
        array.push(i);
        number[2] /= i;
    }
}

if(number[2] > 2) {
    array.push(number[2]);
}

console.log(array);