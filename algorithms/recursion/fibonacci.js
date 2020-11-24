// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

// number 3 => 5th, return index 4
// O(2^N) Exponential time
function fibonacciRecursive(number) {
    if (number < 2) {
        return number;
    }

    return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}

// O(N)
function fibonacciIterative(number) {
    if (number === 0) return 0;
    if (number === 1 || number === 2) return 1;

    let firstNum = 1; // When the index of number is n, (n - 1)th  number
    let secondNum = 0; // When the index of number is n, (n - 2)th sequence number
    let index = 1;
    let sum = 0;

    while (index < number) {
        index++;
        sum = firstNum + secondNum;
        secondNum = firstNum;
        firstNum = sum;
    }

    return sum;
}

// for loop version
// function fibonacciIterative(number) {
//     if (number === 0) return 0;
//     if (number === 1 || number === 2) return 1;

//     let sum = 0;

//     for (let firstNum = 1, secondNum = 2, index = 1; index < number; index++) {
//         sum = firstNum + secondNum;
//         secondNum = firstNum;
//         firstNum = sum;
//     }
// } 

module.exports = () => {
    console.log('recursive', fibonacciRecursive(2)); // 1
    console.log('iterative', fibonacciIterative(2)); // 1
    console.log('recursive', fibonacciRecursive(8)); // 21
    console.log('iterative', fibonacciIterative(8)); // 21
}
