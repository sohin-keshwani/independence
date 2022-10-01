'use strict';

const maxItemInList = function(arr)  {
    if (arr.length == 0) return Number.MIN_VALUE;;

    return Math.max(arr[0] , maxItemInList(arr.slice(1)));
};

console.log(maxItemInList([1,7,3,44,5]))