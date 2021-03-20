//Program to store dice value and count into map
let rolls=new Map();
let sortedMap=new Map();
let diceNumber;
//initializing map
for(let i=1;i<7;i++){
    rolls.set(i,0);
}

do {
    diceNumber=Math.floor(Math.random()*6)+1;
    rolls.set(diceNumber,rolls.get(diceNumber)+1);
} while(rolls.get(diceNumber)!=10);

//Map Traversal
console.log("Printing roll map")
for(let entry of rolls){
    console.log(entry);
}

//sorted Map
console.log("sorted entries",[...rolls.entries()].sort((a,b)=>a[1]-b[1]));
console.log("Dice Number with Max counts",[...rolls.entries()].reduce((a,b)=> a[1]>b[1]?a:b));
console.log("Dice Number with Min counts",[...rolls.entries()].reduce((a,b)=> a[1]<b[1]?a:b));