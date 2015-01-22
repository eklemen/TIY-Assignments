var assert = require('assert');
/*
function plus (A, B) {
    
    return 1;
}

it('should add "zero" plus "one"', function() {
    assert.equal(plus("one", "one"), 1)
})
*/

function plus(A, B){
    if(A == 0){
        return B;
    } else if(B == 0) {
        return A;
    } else {
        return (A + B);
    }
}

it('should add zero to ANYTHING', function() {
    assert.equal(plus(5, 2), 7);
})