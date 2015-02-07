(function (window) {
	'use strict';
    
    $(document).ready(function(){
//        var user = $.get('../apis/github/users/eklemen/eklemen.json');
//        console.log(user);
        var path = '../apis/github/users/eklemen/eklemen.json'
        
        $.getJSON(path, function(json){
            $('.contact a').html(json.login);
        });
        
            });

})(window);
