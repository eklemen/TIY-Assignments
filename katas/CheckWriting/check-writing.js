var ones =['zero','one','two','three','four','five','six','seven','eight','nine','ten','elevent','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

var tens = [ , , 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];



function foo(input){
    var tenPlace = input.toString();
    var tenSlice = tenPlace.slice(0,1);
    var tenParse = parseInt(tenSlice);
    
    var onePlace = input.toString();
    var oneSlice = onePlace.slice(1,2);
    var oneParse = parseInt(oneSlice);
    
    if(input>=19){
        return tens[tenParse] + '-' + ones[oneParse];
    } else {
        return ones[input];
    }
}


console.log(foo(18));