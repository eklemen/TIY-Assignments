var assert = require('assert');

/*function toEnglish(a){
    return "one";
    
}

it('should return 1 as string "one"', function(){
    assert.equal(toEnglish(1), "one");
})
*/

//function toEnglish (a){
//    if(a == 2) {
//        return "two";    
//    } else {
//        return "this is not the number 2";
//    }
//    
//}

//console.log(toEnglish(3));
//
//it('should return "two" when 2 is entered and "not two" if any other number is entered', function(){
//    assert.equal(toEnglish(2), "two");
//})

function toEnglish (a){
    if (a == 3){
        return "three";
    } else {
        return "this is not the number three"
    }
}

console.log(toEnglish(3));

it('should turn 3 into "three", else its not 3', function (){
    assert.equal(toEnglish(3), "three");
})