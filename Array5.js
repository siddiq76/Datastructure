//Program to Determine repeated digits and storing them in an array
{
    let repeatedArray=[];
    function range(start, end) {
        for(let i=start; i<end;++i){
            getRepeatedDigits(i);
        }
    }

    function getRepeatedDigits(number) {
        let originalNumber=number;
        if(number%10==(Math.floor(number/10)%10)&&number%10!=0) {
            repeatedArray.push(originalNumber);
        }
    }

    let start=0;
    let end=100;
    range(start,end);
    for(let i=0;i<repeatedArray.length;i++){
        console.log(repeatedArray[i]);
    }
}