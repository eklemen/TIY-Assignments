var ones = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
}

var tens = ['twenty', 'thirty'];

function foo(input){
    console.log(input)
    if(input>9){
        return tens[input-10];
    } else {
        return ones[input];
    }
}


console.log(foo(11));