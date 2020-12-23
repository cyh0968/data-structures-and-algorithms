function insertionSort(array) {
    const length = array.length;
    let count = 0;
    for (let i = 0; i + 1 < length; i++) {
        // count++
        if (array[i] > array[i + 1]) {
            const insertionValue = array[i + 1];
            array.splice(i + 1, 1);
            array.unshift(insertionValue);
            let j = 1;
            let isMoved = false;
            while (insertionValue > array[j]) {
                j++;
                count++;
            }

            if (j !== 1) {
                let removedArray = array.splice(j);
                array.shift();
                array.push(insertionValue);
                array.push(...removedArray);
            }
        } 
        
    }
    console.log(count)
    return array;
}

function insertionSort2(array) {
    const length = array.length;
    let count = 0;
    for (let i = 0; i < length; i++) {
        // count++
        if (array[i] < array[0]) {
            //move number to the first position
            array.unshift(array.splice(i, 1)[0]);
        } else {
            // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
            if (array[i] < array[i - 1]) {
                //find where number should go
                for (var j = 1; j < i; j++) {
                    count++
                    if (array[i] >= array[j - 1] && array[i] < array[j]) {
                        //move number to the right spot
                        array.splice(j, 0, array.splice(i, 1)[0]);

                    }
                }
            }
        }
    }
    console.log(count)
}

module.exports = () => {
    const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 129, 33, 27, 96, 18, 64];
    console.time('hello2')
    console.log(insertionSort2(numbers2));
    console.timeEnd('hello2')

    const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 129, 33, 27, 96, 18, 64];
    console.time('hello')
    console.log(insertionSort(numbers));
    console.timeEnd('hello')
    console.log(numbers)
}
