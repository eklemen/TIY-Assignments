var clickMe = function(){
    this.nextElementSibling.className = "open";
}

var h2s = document.getElementsByTagName('h2');

for(var index=0; index< h2s.length; index++){
    h2s[index].onclick = clickMe;
}
