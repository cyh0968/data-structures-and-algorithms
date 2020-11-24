function bubbleSort(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            count++;
        }
    }
    console.log(`iterated for ${count} times`);
    // this works differently, it is not a buble sort.
    return array;
}

function bubbleSort2(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
            count++;
        }
    }
    // this is a bubble sort
    console.log(`iterated for ${count} times`);
    return array;
}

const test = () => {
    const numbers1 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 23, 100, 2323, 14, 67, 23, 12323, 45, 472];
    const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
    console.log(bubbleSort(numbers1));
    console.log(bubbleSort2(numbers2));
}

module.exports = test;