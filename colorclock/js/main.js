$(document).ready(function(){

    var jsTime = function() {
        var t = new Date();
//        var timeOnly = t.toTimeString().slice(0, 8);
//        var hours = timeOnly.slice(0,2);
//        var min = timeOnly.slice(3, 5);
//        var sec = timeOnly.slice(6, 8);
        var hours = t.getHours();
        var min = t.getMinutes();
        var sec = t.getSeconds();
        var color = '#' + hours.toString(16) + min.toString(16); + sec.toString(16);
        var change = $('body').css("backgroundColor", color);
        $('#clock > p').html(hours + ':' + min + ':' + sec);
    };
    setInterval(function(){jsTime()}, 1000);
    var nums = new Date();
    console.log(nums.toString(16));
    
})