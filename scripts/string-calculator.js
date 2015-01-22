var assert = require('assert');
/*
function plus (A, B) {
    
    return 1;
}

it('should add "zero" plus "one"', function() {
    assert.equal(plus("one", "one"), 1)
})
*/

function diff (a, b) {
    if (a == "two") {
        return 1;
    }
}

it('should add "two" and "two" giving 4', function() {
    assert.equal(diff("two", "two"), 4);
})

it('should subtract "two" and "twenty"', function(){
    assert.equal(diff("two", "one"), 1)
})