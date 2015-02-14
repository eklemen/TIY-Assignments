var ones =['zero','one','two','three','four','five','six','seven','eight','nine','ten','elevent','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

var tens = [ , , 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];




function foo(input){
    var toString = input.toString(),
        tenSlice = toString.slice(-2, -1),
        tenParse = parseInt(tenSlice);
    
    var oneSlice = toString.slice(-1),
        oneParse = parseInt(oneSlice);
    
    var hundred = toString.slice(-3, -2),
        hundParse = parseInt(hundred);
    
    
    if(input>99){
        return ones[hundParse] + ' hundred ' + tens[tenParse] + ' ' + ones[oneParse];
        // need to add an if statement for 100-119 but there are more important
        // things to worry about at the moment
    } else if (input>19){
        return tens[tenParse] + '-' + ones[oneParse];

    }else {
        return ones[input];
    }
}


console.log(foo(556));