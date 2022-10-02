'use strict';

let voters = {};
const vote = (name) => {
    if (name in voters) {
        console.log(`${name} has already voted`)
    } else {
        voters[name] = true
        console.log(`${name} is being added to voted list`)
    }
}

vote('mike')
vote('biden')
vote('mike')