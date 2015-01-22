var assert = require('assert');

/*function toEnglish(a){
    return "one";
    
}

it('should return 1 as string "one"', function(){
    assert.equal(toEnglish(1), "one");
})
*/

function toEnglish (a){
    if(a == 2) {
        return "two";    
    } else {
        return "this is not the number 2";
    }
    
}

console.log(toEnglish(3));

it('should return "two" when 2 is entered and "not two" if any other number is entered', function(){
    assert.equal(toEnglish(2), "two")
})