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
              var listItem = $('<a class="repo-class"><li></li></a>');
              var repI = repos[i];
              $('.repo-class').attr("href", repI.html_url);
              $('<h3>' + repI.name + '</h3>').appendTo(listItem);
              $('<p>' + repI.created_at + '</p><hr>').appendTo(listItem);
//               console.log(repos[i].name);     
              return listItem;
              });
              $('.repo-list').html(repoItems);
          })
        });
        
            });

})(window);
