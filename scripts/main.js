var assert = require('assert');

function add (a, b){
    return(a + b);
    console.log(a + b);
}


assert(add(4, 3) == 5);
