var events = require('../apis/github/users/eklemen/events.json'),
    assert = require('assert'),
    _ = require('lodash');

console.log(Date());

    it('should tell us that events has an input', function (){
        assert(events);
    });

function answer(){
    var pushEvents = _.filter(events, {'type': 'PushEvent'}
                            );
    
//    var uniqueTypes = _.filter(events, {'type': 'PushEvent'}
//                              );
//    
   
    return { 
        'total': events.length,
        'PushEvent': {
            'total': pushEvents.length,
        }
    };
}
var theAnswer = answer();
var first = _.first(events);
var last = _.last(events);

console.log(
    _(events)
        .pluck(events, 'created_at')
        .map(fucntion(date) {
             return date.slice(0, 10);
        })
        .uniq()
    .value()
);
    


it('should have `perDay` stats', function(){
    assert(first);
    assert(first.created_at); 
    console.log(first.created_at.slice(8, 10));
    console.log(last.created_at.slice(8, 10));
});

// store in new array all event types
    

    it('should return that answer exists, and test for total events', function(){
        assert(answer);
        assert(events.length === 30);
    });

    it('should return the length when calling answer function', function(){
       assert.equal(theAnswer.total, 30); 
    });

    it('should have "PushEvent", and has a total count of PushEvents', function(){
        assert(theAnswer.PushEvent);
        assert(theAnswer.PushEvent.total);
    });
    
//    it ('should find all unique `type`s', fucntion(){
//        assert(theAnswer.unique);
//    });

// THE CODE BELOW IS FROM MONDAY

//console.log(events.length); //prints 30, I'm assuming 30 events but that doesnt seem right hmm...
//
//assert(events.length);
//
//function answer(){
//    var index = 0;
//    var numberOfPushEvents = 0; 
//    // can leave off index and array if not using them
// 
//    events.forEach(function(item, index, array){
//        if(item.type == "PushEvent"){
//            numberOfPushEvents++;
//        }
//    });
//    
//    var pushEvents = events.filter(function(item){
//        return item.type == "PushEvent";
//        
//    });
//    pushEvents.length == numberOfPushEvents;
//    
//    return {
//        'total': events.length,
//        'PushEvent': {
//            'total': numberOfPushEvents,
//        }
//    };
//}
//
//describe('Should determine that events and answer exist, also what type they are', function(){
//it('should be test for events and answer', function(){
//    assert(events);
//    assert(events instanceof Array);
//    assert(answer);
//    assert(typeof answer == 'function');
//})
//})
//
//describe("tests for key values", function(){
//    it('should have 30 total events', function(){
//        assert(events.length > 0)
//        assert.equal(events.length, 30)
//    })  
//    
//})

    
    
//    while (index < events.length) {
//        var event = events[index];
//        
//        if (event.type == "PushEvent"){
//            numberOfPushEvents++;
//        }
//        
//        index++;
//    }
//    
//    
//    return {
//        'total': events.length
//    };
// end answer
//
//describe('the setup', function (){
//
//    it('should have events', function (){
//        assert(events);
//    });
//
//    it('should have an "answer" function', function(){
//        assert(answer);
//        assert(typeof answer == 'function');
//    });
//});
//describe('the answer', function (){
//    var theAnswer = answer ();
//    
//    it('should have 30 total events', function (){
//        assert(theAnswer.total === 30);
//    });
//    
//    it('should have some `PushEvent` entries', function(){
//        assert(theAnswer.PushEvents);
//        assert(theAnswer.PushEvents.total);
//    });
//});