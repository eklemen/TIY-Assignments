var events = require('../apis/github/users/eklemen/events.json');
var assert = require('assert');
console.log(events.length); //prints 30, I'm assuming 30 events but that doesnt seem right hmm...

assert(events.length);

function answer () {
    return {
        'total': events.length
    }
} // end answer

describe('the setup', function (){

    it('should have events', function (){
        assert(events);
    });

    it('should have an "answer" function', function(){
        assert(answer);
        assert(typeof answer == 'function');
    });
});
describe('the answer', function (){
    var theAnswer = answer ();
    
    it('should have 30 total events', function (){
        assert(theAnswer.total === 30);
    });
    
    it('should have some `PushEvent` entries', function(){
        assert(theAnswer.PushEvents);
        assert(theAnswer.PushEvents.total);
    });
});