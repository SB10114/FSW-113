//add the elements of the array
const numbersArray = [2, 4, 6, 8, 10];

//the expected result is 30

var addNumber = function(a){
    let sum = 0; //accumulator
    for (i =0; 1 < a.length; i++){
        sum = sum + a[i]; //accumulates
    }
    return sum; //result
}

//test

var expectedResult = 30;
var result = addNumber(numbersArray);

if (expectedResult == result){
    console.log('The test passed')
} else {
    console.log('The test failed')
}