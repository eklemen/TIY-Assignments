var assert = require('assert');
console.log(Date());

var toEnglish = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thriteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];

function printer(n){
    console.log(toEnglish[n]);
    return toEnglish[n];
}

it('should print the string number value for the integer given to printer', function(){
    assert.equal(printer(5), "five");
    assert.equal(printer(4), "five");
    });

//var whatNum = function(a){
//    if(a == 0){
//        return toEnglish[0];
//    } else if(a == 1){
//        return toEnglish[1];
//    } else if(a == 2){
//        return toEnglish[2];
//    } else if(a == 3) {
//        return toEnglish[3];
//    } else if(a == 4){
//        return toEnglish[4];
//    } else if(a == 5){
//        return toEnglish[5];
//    } else if(a == 6){
//        return toEnglish[6];
//    } else if(a == 7){
//        return toEnglish[7];
//    } else if(a == 8){
//        return toEnglish[8];
//    } else if(a == 9){
//        return toEnglish[9];
//    } else if(a == 10){
//        return toEnglish[10];
//    } else {
//        console.log("i can't count that high yet");
//    }
//}
//
//console.log(whatNum(3));

//it('should print the string number of what is entered 0-5', function(){
//    assert
//})

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

//function toEnglish (a){
//    if (a == 3){
//        return "three";
//    } else {
//        return "this is not the number three"
//    }
//}
//
//console.log(toEnglish(3));
//
//it('should turn 3 into "three", else its not 3', function (){
//    assert.equal(toEnglish(3), "three");
//})

//function toEnglish(a){
//    if(a==3){
//        return "three";
//    } else {
//        return "this number is not 3";
//    }
//}
//
//it('should return "three" if 3 is entered, else message', function(){
//    assert.equal(toEnglish(3), "three");
//})