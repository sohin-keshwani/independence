'use strict';

const count = function(arr)  {
    if (arr.length == 1) return 1;

    return 1 + count(arr.slice(1));
};

console.log(count([1,2,3,4,5]))