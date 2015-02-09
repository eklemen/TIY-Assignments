$(document).ready(function(){

    var jsTime = function() {
        var t = new Date();
        var timeOnly = t.toTimeString().slice(0, 8);
        var hours = timeOnly.slice(0,2);
        var min = timeOnly.slice(3, 5);
        var sec = timeOnly.slice(6, 8)
        var color = '#'+hours+min+sec;
        var change = $('body').css("background-color", color);
        $('p').html(hours+ ' ' + min + ' ' +sec);
    };
    setInterval(function(){jsTime()}, 1000);
    
})