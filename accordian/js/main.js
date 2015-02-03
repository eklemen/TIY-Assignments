//var clickMe = function(){
//if (this.nextElementSibling.className != "open") {
//            this.nextElementSibling.className = "open";
//            }
//            else {
//                this.nextElementSibling.className = "closed";;
//            }
//        
//}
//
//var h2s = document.getElementsByTagName('h2');
//var h3s = document.getElementsByTagName('h3');
//
//for(var index=0; index< h2s.length; index++){
//    h2s[index].onclick = clickMe;
//}
//
//for(var index=0; index< h3s.length; index++){
//    h3s[index].onclick = clickMe;
//}

jQuery('h2').on('click', function(event){
    event.preventDefault();
    
    
})

_.foreach(document.querySelectorAll('h2'), function(h2){
    h2.onclick = function(){
        event.preventDefault();
        console.log(arguments);
        var classes = h2.className.split(' ');
        if (classes.indexOf('open') > 1){
            // remove open from classes
            // turn classes back into a string
            // element.classList
        } else {
            h2.className = 'open';
        }
        h2.className = 'open';
    }
});