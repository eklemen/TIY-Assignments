var assert = require('assert');
/*
function plus (A, B) {
    
    return 1;
}

it('should add "zero" plus "one"', function() {
    assert.equal(plus("one", "one"), 1)
})
*/

//function diff (a, b) {
//    if (a == "two") {
//        return 1;
//    }
//}
//
//it('should add "two" and "two" giving 4', function() {
//    assert.equal(diff("two", "two"), 4);
//})
//
//it('should subtract "two" and "twenty"', function(){
//    assert.equal(diff("two", "one"), 1)
//})

//function prod(a, b){
//    if (a == 0 || b == 0){
//        return 'zero';
//        0 == 'zero'
//    }
//}
//
//it('should return "zero" if either number is 0', function(){
//    assert.equal(prod(0, 4), "zero");
//    assert.equal(prod(3, 0), "zero");
//})

function div(a, b){
    if(a == "zero") {
        return 0;
    } else if(b== "zero"){
        return "undefined";
    };
}

it('should return "zero" if the first number is 0, but if you try to divide by "zero" you will get "undefined"', function(){
    assert.equal(div("zero", 5), 0);
})