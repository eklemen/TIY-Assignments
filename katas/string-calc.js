var assert = require('assert');
var _ = require('lodash');
var nums = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19
}

function sum(a, b){
    var result = nums[a] + nums[b];
    var answer = (_.invert(nums))[result];
    //found this neat trick on the interwebs, by using _.invert, you can
    // search for a KEY based on the Value of an item
    return answer;
}


console.log(sum('five', 'three'));
//returns the string value of the sum/diff/prod


function diff(a, b){
   var result = nums[a] - nums[b];
    var answer = (_.invert(nums))[result];
    return answer;
}

console.log(diff('eighteen', 'six'));
