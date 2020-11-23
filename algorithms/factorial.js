function findFactorialRecursive(number) {
    if (number < 2) {
        return 1;
    }
    return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
    if (number === 0) return 1; 
    let result = number;
    
    for (let index = number - 1; index > 1; index--) {
        result *= index;
    }
    
    return result;
}

module.exports = () => {
    console.log('recursive', findFactorialRecursive(0)) // 0
    console.log('iterative', findFactorialIterative(0)) // 0
    console.log('recursive', findFactorialRecursive(1)) // 1
    console.log('iterative', findFactorialIterative(1)) // 1
    console.log('recursive', findFactorialRecursive(5)) // 120
    console.log('iterative', findFactorialIterative(5)) // 120
    console.log('recursive', findFactorialRecursive(7)) // 5040
    console.log('iterative', findFactorialIterative(7)) // 5040
}