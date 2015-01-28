var assert = require('assert');

console.log(Date());

function plus (A, B) {
    var numbers = {
        "twenty": 20,
        "nineteen": 19,
        "eighteen": 18,
        "seventeen": 17,
        "sixteen": 16,
        "fifteen": 15,
        "fourteen": 14,
        "thirteen": 13,
        "twelve": 12,
        "eleven": 11,
        "ten": 10,
        "nine": 9,
        "eight": 8,
        "seven": 7,
        "six": 6,
        "five": 5,
        "four": 4,
        "three": 3,
        "two": 2,
        "one": 1,
        "zero": 0
    };
    return numbers[A] + numbers[B];
}

it('Tests A input values against B when B is zero', function(){
    assert.equal(plus("zero", "zero"), 0);
    assert.equal(plus("one", "zero"), 1);
    assert.equal(plus("two", "zero"), 2);
    assert.equal(plus("three", "zero"), 3);
    assert.equal(plus("four", "zero"), 4);
    assert.equal(plus("five", "zero"), 5);
    assert.equal(plus("six", "zero"), 6);
    assert.equal(plus("seven", "zero"), 7);
    assert.equal(plus("eight", "zero"), 8);
    assert.equal(plus("nine", "zero"), 9);
    assert.equal(plus("ten", "zero"), 10);
});

it('Tests B input values against A when A is zero', function(){
    assert.equal(plus("zero", "zero"), 0);
    assert.equal(plus("zero", "one"), 1);
    assert.equal(plus("zero", "two"), 2);
    assert.equal(plus("zero", "three"), 3);
    assert.equal(plus("zero", "four"), 4);
    assert.equal(plus("zero", "five"), 5);
    assert.equal(plus("zero", "six"), 6);
    assert.equal(plus("zero", "seven"), 7);
    assert.equal(plus("zero", "eight"), 8);
    assert.equal(plus("zero", "nine"), 9);
    assert.equal(plus("zero", "ten"), 10);
});
//
//
//function product (A, B) {
//    var numbers = {
//        "twenty": 20,
//        "nineteen": 19,
//        "eighteen": 18,
//        "seventeen": 17,
//        "sixteen": 16,
//        "fifteen": 15,
//        "fourteen": 14,
//        "thirteen": 13,
//        "twelve": 12,
//        "eleven": 11,
//        "ten": 10,
//        "nine": 9,
//        "eight": 8,
//        "seven": 7,
//        "six": 6,
//        "five": 5,
//        "four": 4,
//        "three": 3,
//        "two": 2,
//        "one": 1,
//        "zero": 0
//    };
//    return numbers[A] * numbers[B];
//}
//
//it('should return the product as a number value of two string numbers', function(){
//    assert.equal(product("four", "five"), 20);
//});

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