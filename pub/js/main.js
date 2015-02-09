(function (window) {
	'use strict';
    
    $(document).ready(function(){
//        var user = $.get('../apis/github/users/eklemen/eklemen.json');
//        console.log(user);
        var path = 'https://api.github.com/users/eklemen';
        
        $.getJSON(path, function(json){
            var user = json;
            $('#myName').html(user.name);
            $('.profile-pic').html(user.avatar_url)
                .attr("src", user.avatar_url);
            $('#location').html(user.location);
            $('#email').html(user.email)
                .attr('href', 'mailto:' + user.email);
            $('#github-link').html(user.html_url)
                .attr('href', user.html_url);
            $('#followers').html(user.followers + "Followers");
            $('#following').html(user.following + "Following");
          
//            Popular Repo Info
            $.getJSON(user.repos_url, function(repos){

        var repoTab1 = $.map(repos, function(name, i){
            var listItem = $('<li></li>');
            var repI = repos[i];
            $('<a href="https://github.com/eklemen/' + repos[i].name + '">' +  '<h3 class="octicon octicon-repo">' + repI.name + '</h3></a>').appendTo(listItem);
            $('<p class="description">' + repI.description + '</p><hr>').appendTo(listItem);
            //               console.log(repos[i].name);     
            return listItem;
            });
            $('.tab1').html(repoTab1);
            var repoTab2 = $.map(repos, function(name, i){
              var listItem = $('<li></li>');
              var repI = repos[i];
              $('<a href="https://github.com/eklemen/' + repos[i].name + '">' + '<h3>' + repI.name + '</h3></a>').appendTo(listItem);
              $('<p>' + repI.description + '</p>').appendTo(listItem);
              $('<p class="updated">' + repI.updated_at + '</p><hr>').appendTo(listItem);
//               console.log(repos[i].name);     
              return listItem;
            });
            $('.tab2').html(repoTab2);    
          });
            
        });
        $("#submit").on('click', function(){
            $.post("https://api.github.com/repos/TheIronYard--Orlando/FEE--2015--SPRING/issues/250/comments?access_token=b8b4f2f9b8c99ce634276b29acdfd7ad8a05cdb4", JSON.stringify({"body": $(".comment-box").val()})),
            $(".comment-box").val("");    
        });
        
            });

})(window);
