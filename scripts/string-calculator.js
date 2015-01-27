var assert = require('assert');

//it('should have a `plus` function', function(){
//   assert(plus);
//    assert.equal(typeof plus, 'function');
//});
//
//
//it('should add "zeros"', function(){
//    assert.equal(plus("zero", "zero"), 0);
//    
//})

console.log(Date());


function plus (B) {
    var numbers = {
        "six": 6,
        "five": 5,
        "four": 4,
        "three": 3,
        "two": 2,
        "one": 1,
        "zero": 0
    };
    return numbers[B];
}

it('enter "string" should return number', function(){
    assert.equal(plus("two"), 2);
});

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

//function div(a, b){
//    if(a == "zero") {
//        return 0;
//    } else if(b== "zero"){
//        return "undefined";
//    };
//}
//
//it('should return "zero" if the first number is 0, but if you try to divide by "zero" you will get "undefined"', function(){
//    assert.equal(div("zero", 5), 0);
//})

//function plus(a){
//    if(a == "six"){
//        return 6;
//    }
//}
//
//it("should return 6 when you enter 'six' ", function(){
//    assert.equal(plus("six"), 6);
//})
//
//function plus(a){
//    if(a == "seven"){
//        return 7;
//    }
//}
//
//it("should return 7 when you enter 'seven' ", function(){
//    assert.equal(plus("seven"), 7);
//})
//
//function plus(a){
//    if(a == "eight"){
//        return 8;
//    }
//}
//
//it("should return 8 when you enter 'eight' ", function(){
//    assert.equal(plus("eight"), 8);
//})

//function plus(a){
//    if(a == "nine"){
//        return 9;
//    }
//}
//
//it("should return 9 when you enter 'nine' ", function(){
//    assert.equal(plus("nine"), 9);
//})