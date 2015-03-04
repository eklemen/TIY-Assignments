(function(){
    
    var app = angular.module('gemStore', []);
    app.controller("ReviewController", function(){
       this.review = {};
        
        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        }
    });
    
    
    var gem = [
        {
            name: 'Azurite',
            price: 2.95,
            description: 'Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sided',
            shine: '5',
            reviews: [{
                stars: 5,
                body: "wow what a gem",
                author: "joe@example.org"
        }],
        },
        {
            name: 'Bloodstone',
            price: 5.95,
            description: 'I think this gem was just OK, could honestly use more shine, IMO.',
            shine: '8',
            reviews: [{
                stars: 3,
                body: "Nice gem",
                author: "joe@example.org"
        }],
        },
        {
            name: 'Zircon',
            price: 3.95,
            description: 'Even more nice,It has a very high shine and 12 sided',
            shine: '8',
            reviews: [{
                stars: 5,
                body: "Really great product",
                author: "joe@example.com"
        }],
        }

    ];
    
})();