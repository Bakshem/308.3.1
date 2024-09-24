let sumOdd = 0;
let sumEven = 0;
let num = 1;
while (num <= 50){
    if ( num %2 === 0){
        sumEven += num
    }
    if (num %2 !== 0){
        sumOdd += num
    }
    num++;
    console.log("Sum of even numbers is : " + sumEven);
    console.log("Sum of odd numbers is : " + sumOdd);

}