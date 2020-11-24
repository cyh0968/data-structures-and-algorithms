function insertionSort(array) {
    const length = array.length;
    for (let i = 0; i + 1 < length; i++) {
        if (array[i] > array[i + 1]) {
            const insertionValue = array[i + 1];
            array.splice(i + 1, 1);
            array.unshift(insertionValue);
            let j = 1;
            let isMoved = false;
            while (insertionValue > array[j]) {
                j++;
            }

            if (j !== 1) {
                let removedArray = array.splice(j);
                array.shift();
                array.push(insertionValue);
                array = array.concat(removedArray);
            }
            

        }
    }
    return array;
}
module.exports = () => {
    const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
    console.log(insertionSort(numbers));
}
