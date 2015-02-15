(function (window){
    'use strict';
    
    $(document).ready(function(){
        var path = 'gh-api/eklemen.json';
        
        $.getJSON(path, function(user){
            console.log(user);
            
        })
        
        
        
        
        
    })
})(window);
