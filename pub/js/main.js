(function(){
    
    var app = angular.module('gemStore', []);
    app.controller('StoreController', function(){
        this.products = gem;
    });
    
    app.controller("TabController", function(){
        this.tab = 1;
        
        this.setTab = function(selectedTab){
            this.tab = selectedTab;
        };
        
        this.isSet = function(givenTab){
        return this.tab === givenTab;
    }; 
    });
    
    var gem = [
        {
            name: 'Azurite',
            price: 2.95,
            images: 'http://lorempixel.com/output/sports-q-c-200-200-6.jpg'
        },
        {
            name: 'Bloodstone',
            price: 5.95,
            images: 'http://lorempixel.com/output/abstract-q-c-200-200-1.jpg'
        },
        {
            name: 'Zircon',
            price: 3.95,
            images: 'http://lorempixel.com/output/nightlife-q-c-200-200-2.jpg'
        }

    ];
    
})();