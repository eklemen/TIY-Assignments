(function (window) {
	'use strict';
    var user = $.get('../apis/github/users/eklemen/eklemen.json');

	// Your starting point. Enjoy the ride!
    $(document).ready(function(){
        console.log(user.responseJSON);
    })

})(window);
