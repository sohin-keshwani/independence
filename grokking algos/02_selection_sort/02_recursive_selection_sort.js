'use strict';

function findSmallestIndex(array) {
    let smallestElement = array[0];
    let smallestElementIndex = 0;

    const n = array.length;

    for (let i = 1; i < n; i++) {
        if (array[i] < smallestElement) {
            smallestElement = array[i];
            smallestElementIndex = i;
        }
    }

    return smallestElementIndex;

}

function selectionSort(array) {
    if ( !array.length ) return [];
    let smallestSubset = array.splice(findSmallestIndex(array), 1);
    console.log(array)
    return smallestSubset.concat(selectionSort(array))
}

console.log(selectionSort([5, 3, 6, 2, 10])); // [2, 3, 5, 6, 10]
