// Program to find the second largest and second smallest element in an array with sorting
let arr = new Array();
let firstMax = 0,firstMin = 1000;
for(let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * (900) + 100)); 
}

arr.sort();
console.log(arr);   // Sorted Array
console.log('2\'nd Maximum Element in the Array is '+ arr[arr.length -2]);
console.log('2\'nd Minimum Element in the Array is '+ arr[1]);