var assert = require('assert');


function solution (x) {
    var sums = 0;

    for (var i = 1; i < x; i++){
        if (i % 3 === 0 || i % 5 === 0){
            sums+=i;
        }
        
    }
    return sums;
}
console.log(Date());

it('should have a `solution` function', function(){
  assert(solution);
  assert.equal(typeof solution, 'function');
});

it('should have a `solution` for (10, 20, 30)', function(){
  assert.equal(solution(10), 23);
  assert.equal(solution(20), 78);
  assert.equal(solution(30), 195);
});

it('should have a `solution` for 50', function(){
  assert.equal(solution(50), 543);
});

it('should have a solution for 100', function(){
  assert.equal(solution(100), 2318);
});

it('should have a solution for 1000', function(){
  assert.equal(solution(1000), 233168);
});

// What about 1000?
//
//function mod (x){
//        var counter = 0;
//        while (counter < A){
//        if (x % 3 == 0 || x % 5 == 0){
//            return x;
//        }
//        counter++;
//    }