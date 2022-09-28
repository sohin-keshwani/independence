'use strict';

function findSmallestIndex(array) {
    let smallestElement = array[0];
    let smallestElementIndex = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallestElement) {
            smallestElement = array[i];
            smallestElementIndex = i;
        }
    }

    return smallestElementIndex;

}


function selectionSort(array) {
    let newArray = [];
    const n = array.length;
    for (let i = 0; i < n; i++) {
        let smallestElementIndex = findSmallestIndex(array);
        
        newArray.push(array.splice(smallestElementIndex, 1) [0])
    }

    return newArray;
}

console.log(selectionSort([5, 3, 6, 2, 10])); // [2, 3, 5, 6, 10]
