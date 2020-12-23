// separate array into individual elements
// sort two elements and sort them
// merge them until it becomes the original array

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4];

function mergeSort(array) {
    if (array.length === 1) {
        return array
    }

    const middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const sortedArray = []

    let indexOfLeft = 0;
    let indexOfRight = 0;
    
    while (indexOfLeft < left.length && indexOfRight < right.length) {
        if (left[indexOfLeft] <= right[indexOfRight]) {
            sortedArray.push(left[indexOfLeft])
            indexOfLeft++
        } else {
            sortedArray.push(right[indexOfRight])
            indexOfRight++
        }
    }

    return sortedArray.concat(left.slice(indexOfLeft)).concat(right.slice(indexOfRight));
}

const answer = mergeSort(numbers)
console.log(answer)