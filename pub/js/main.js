//var clickMe = function(){
//    this.nextElementSibling.className = "open";
//}
//
//var h2s = document.getElementsByTagName('h2');
//
//for(var index=0; index< h2s.length; index++){
//    h2s[index].onclick = clickMe;
//}

var switchTab = function(){
    this.pics[0];
}

var tabs = document.getElementsByClassName('nav');
var pics = document.getElementsByClassName('pics');

for (var i=0; i<tabs.length; i++){
    tabs[i].onclick = switchTab;
}
