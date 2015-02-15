(function (window){
    'use strict';
    
    $(document).ready(function(){
        var path = 'gh-api/eklemen.json';
        
        $.getJSON(path, function(user){
            console.log(user);
            $('#profile-pic').attr('src', user.avatar_url);
            $('#name').text(user.name);
            $('#username').text(user.login);
            $('#location').text(user.location);
            $('#email').html(user.email)
                .attr('href', 'mailto:' + user.email);
            $('#joined-on').text('Joined on: ' + user.created_at.substring(0,10));
            $('#follower-number').text(user.followers);
            $('#following-number').text(user.following);
            
            //popular repo
            $.getJSON(user.repos_url, function(repos){
                
            var repoTab1 = $.map(repos, function(name, index){
                var newListItem = $('<li></li>');
                var repI = repos[index];
                $('<h3>' + repI.name + '</h3>').appendTo(newListItem);
                return newListItem;
            });
               $('.tab1').append(repoTab1); 
            });
            
        })
        
        
        
        
        
    })
})(window);
