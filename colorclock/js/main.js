$(document).ready(function(){

    var jsTime = function() {
        var t = new Date();
        var timeOnly = t.toTimeString().slice(0, 8);
        var hours = timeOnly.slice(0,2);
        var min = timeOnly.slice(3, 5);
        var sec = timeOnly.slice(6, 8);
//        var hours = t.getHours();
//        var hourstr = hours.toString();
//        var min = t.getMinutes();
//        var minstr = min.toString();
//        var sec = t.getSeconds();
//        var secstr = sec.toString();
        var color = '#' + hours + min + sec;
        var change = $('body').css("backgroundColor", color);
        $('#clock > p').html(hours + ':' + min + ':' + sec);
        console.log(sec.toString(16));
    };
    setInterval(function(){jsTime()}, 1000);
    
})