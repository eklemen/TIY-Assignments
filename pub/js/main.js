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
    
    app.controller("GalleryController", function(){
        this.current = 0;
        this.setCurrent = function(newGallery){
          this.current = newGallery || 0;  
        };
    });
    
    var gem = [
        {
            name: 'Azurite',
            price: 2.95,
            images: 'http://lorempixel.com/output/sports-q-c-200-200-6.jpg',
            description: 'Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sided',
            shine: '5'
        },
        {
            name: 'Bloodstone',
            price: 5.95,
            images: 'http://lorempixel.com/output/abstract-q-c-200-200-1.jpg',
            description: 'I think this gem was just OK, could honestly use more shine, IMO.',
            shine: '8'
        },
        {
            name: 'Zircon',
            price: 3.95,
            images: 'http://lorempixel.com/output/nightlife-q-c-200-200-2.jpg',
            description: 'Even more nice,It has a very high shine and 12 sided',
            shine: '8'
        }

    ];
    
})();