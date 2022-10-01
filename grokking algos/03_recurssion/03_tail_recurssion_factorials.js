'use strict';

const factorials = (n, o) => {
    if (n == 1) {
        return o
    }
    return factorials(n - 1, n * o)
};

const start = Date.now();
console.log(factorials(1000,1));
console.log(`Total time taken to compute the factorial: ${Date.now() - start}`)