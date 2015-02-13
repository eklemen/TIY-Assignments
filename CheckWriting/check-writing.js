var ones = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six'
}

var tens = {
    20: 'twenty'
}

function foo(input){
    if(input>6){
        return tens[20];
    } else {
        return ones[input];
    }
}


console.log(foo(3));