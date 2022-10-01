'use strict';

function countdown(i) {
    console.log(i);
    if (i == 0) return; // this goes above console.log if we dont want 0 else stick it here
    countdown(i - 1)
}

countdown(5)