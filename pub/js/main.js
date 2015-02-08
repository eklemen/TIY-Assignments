(function (window) {
	'use strict';
    
    $(document).ready(function(){
//        var user = $.get('../apis/github/users/eklemen/eklemen.json');
//        console.log(user);
        var path = '../apis/github/users/eklemen/eklemen.json'
        
        $.getJSON(path, function(json){
            var user = json;
            $('#location').html(user.location);
            $('#email').html(user.email)
                .attr('href', 'mailto:' + user.email);
            $('#github-link').html(user.html_url)
                .attr('href', user.html_url);
            $('#followers').html(user.followers + "Followers");
            $('#following').html(user.following + "Following");
          
//            Popular Repo Info
            $.getJSON(user.repos_url, function(repos){

           var repoItems = $.map(repos, function(name, i){
                  var listItem = $('<li></li>');
                  $('<h3>' + repos[i].name + '</h3>').appendTo(listItem);
                  $('<p>' + repos[i].created_at + '</p><hr>').appendTo(listItem);
//               console.log(repos[i].name);     
               return listItem;
              });
              $('.repo-list').html(repoItems);
          })
        });
        
            });

})(window);
