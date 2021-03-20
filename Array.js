// Program to find the second largest and second smallest element in an array without sorting
let arr = new Array(10);
let firstMax = 0,firstMin = 1000;
for(let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * (900) + 100); 
    firstMax = Math.max(arr[i], firstMax);
    firstMin = Math.min(arr[i], firstMin);
}

console.log(firstMax, firstMin);    // gives the maximum and minimum elements
console.log(arr);   // gives the array of the randon elements

let secondMax = 0;
let secondMin = 1000;
for(let i = 0; i < 10; i++) {
    if(arr[i] < firstMax ) {
        secondMax = Math.max(arr[i], secondMax);
    }
    if(arr[i] > firstMin ) {
        secondMin = Math.min(arr[i], secondMin);
    }
}

console.log('2\'nd Maximum Element in the Array is '+ secondMax);
console.log('2\'nd Minimum Element in the Array is '+ secondMin);