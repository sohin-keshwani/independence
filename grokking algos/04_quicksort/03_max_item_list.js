'use strict';

const maxItemInList = function(arr)  {
    if (arr.length == 0) return Number.MIN_SAFE_INTEGER;

    return Math.max(arr[0] , maxItemInList(arr.slice(1)));
};


// console.log(Math.max(-1, Number.MIN_SAFE_INTEGER))
// console.log(Math.max(-1, Number.MIN_SAFE_INTEGER));

//console.log(maxItemInList([1,7,3,44,5]))

console.log(maxItemInList([-1,-2,-3,-44,-5]))