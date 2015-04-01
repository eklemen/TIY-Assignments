$(document).ready(
    $('.pop-box').on('mouseover', function(){
        $(this).removeClass('overlay');
}).mouseout(function(){
        $(this).addClass('overlay');
    })
    
)
