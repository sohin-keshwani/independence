'use strict';


const search = function (list, item,  high, low) {

    

    let mid = Math.floor((low + high) / 2);
    let searched = list[mid];
    if (searched === item) {
        return mid;
    }

    if (searched > item) {
        return search(list, item, mid -1, low)
    } else if (searched < item) {
        return search(list, item, high, mid + 1)
    } else {
        return null;
    }
}

function binary_search(list, item) {
    
    let low = 0;
    let high = list.length - 1;

   

    return search(list, item, high, low);
}

const my_list = [1, 3, 5, 7, 9];

console.log(binary_search(my_list, 3)); // 1
console.log(binary_search(my_list, -1)); // null
console.log(binary_search(my_list, 9)); // null