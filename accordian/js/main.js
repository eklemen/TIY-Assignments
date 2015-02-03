var clickMe = function(){
if (this.nextElementSibling.className != "open") {
            this.nextElementSibling.className = "open";
            }
            else {
                this.nextElementSibling.className = "closed";;
            }
        
}

var h2s = document.getElementsByTagName('h2');
var h3s = document.getElementsByTagName('h3');

for(var index=0; index< h2s.length; index++){
    h2s[index].onclick = clickMe;
}

for(var index=0; index< h3s.length; index++){
    h3s[index].onclick = clickMe;
}
