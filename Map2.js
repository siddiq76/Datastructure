// Program to generate the birthday month of 50 individuals
let birthMonthMap=new Map();
//initializing Map
for(let i=1;i<=12;i++){
    birthMonthMap.set(i,0);
}

for(let person = 1; person <= 50; person++){
let month = (Math.floor(Math.random() * 100) % 12) + 1;
let count = birthMonthMap.get(month);
birthMonthMap.set(month, ++count);
}
console.log(birthMonthMap);