function selectionSort(array) {
    const length = array.length;
    let count = 0;
    for (let i = 0; i < length; i++) {
        let minNumIndex = i;
        for (let j = i + 1; j < length; j++) {
            if(array[minNumIndex] > array[j]) {
                minNumIndex = j;
            }
            count++;
        }
        let temp = array[i];
        array[i] = array[minNumIndex];
        array[minNumIndex] = temp;
    }
    console.log(`iterated ${count} times`)
    return array;
}


module.exports = () => {
    const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
    console.log(selectionSort(numbers));
}

