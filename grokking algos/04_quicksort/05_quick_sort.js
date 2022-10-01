'use strict';

const qa = (array) => {
    if (array.length <= 1) return array;
    const pivot = array[0];

    let less = array.slice(1).filter((e) => e <= pivot)
    let greater = array.slice(1).filter((e) => e > pivot)
    
    return qa(greater).concat(pivot, qa(less)); // this is for desc
    //return qa(less).concat(pivot, qa(greater)); // this is for asc
};

console.log(qa([1, -1]))
console.log(qa([10, 5, 2, 3]));
/*
10, 5, 2, 3

pivot = 10
less = [5, 2, 3]
gt = []
return [2,3,5,10]

pivot = 5
less = [2, 3]
gt = []
return [2,3,5]

pivot = 2
less = []
gt = [3]

return [2,3]

*/