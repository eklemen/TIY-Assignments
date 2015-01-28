var assert = require('assert');


function solution () {
}


var passingNums = [];

for (var i = 1; i < 10; i++){
    if (i % 3 == 0){
        console.log(i);
    }
}

console.log(passingNums);
//for (var b = 1; b < 10; b++){
//    if (b % 3 == 0){
//        console.log(b);
//    }
//}
//
//        }
//    if (i % 5 == 0){
//        console.log(i);
//    }

console.log(Date());

it('should have a `solution` function', function(){
  assert(solution);
  assert.equal(typeof solution, 'function');
});

it('should have a `solution` for (10, 20, 30)', function(){
  assert.equal(solution(10), 23);
  assert.equal(solution(20), undefined);
  assert.euqal(solution(30), undefined);
});

it('should have a `solution` for 50', function(){
  assert.equal(solution(50), undefined);
});

it('should have a solution for 100', function(){
  assert.equal(solution(100), undefined);
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