'use strict';

function fact(x) {
    if (x == 1) return 1;

    return x * fact(x - 1)
}


/*
fact(5)
return 5 * fact(4)
return 5 * 4 * fact(3)
return 5 * 4 * 3 * fact(2)
return 5 * 4 * 3 * 2 * fact(1)
return 5 * 4 * 3 * 2 * 1
return 5 * 4 * 3 * 2
return 5 * 4 * 6
return 5 * 24
return 120
*/
const start = Date.now();
console.log(fact(1000))
console.log(`Total time taken to compute the factorial: ${Date.now() - start}`)
// fact(3)
// 3 * fact(2)
// 3 * 2 * fact(1)
// 3 * 2 * 1
console.log(fact(3))