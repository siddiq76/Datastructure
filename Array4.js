//Program to show sum of three integers add to zero

function sumOfIntegersAddToZero(arrayOfIntegers) {
    let sortedIntegerArray=[];
    let firstElement, startIndex, endIndex, sum;
    sortedIntegerArray=arrayOfIntegers.sort();
    for(let i = 0; i < sortedIntegerArray.length; i++) {
        firstElement=sortedIntegerArray[i];
        startIndex=i+1;
        endIndex=sortedIntegerArray.length-1;
            while(startIndex<endIndex) {
            sum=sortedIntegerArray[startIndex]+sortedIntegerArray[endIndex];
            if(firstElement+sum==0) {
                console.log("Found Three Elements: "+firstElement+", "+sortedIntegerArray[startIndex]+", "+sortedIntegerArray[endIndex]);
                startIndex++;
                endIndex--;
            } else if(firstElement+sum<0) {
                startIndex++;
            } else {
                endIndex--;
            }
        }
    }
}

let arrayOfIntegers=[1,2,4,-3,-1,5,6];
sumOfIntegersAddToZero(arrayOfIntegers);