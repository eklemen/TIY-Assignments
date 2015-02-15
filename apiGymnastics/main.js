var events = require('./events.json');
var _ = require('lodash');

function answer(){
    console.log(events.length);
    return {
        'total': events.length,
        'PushEvent':{
            'total': foo("PushEvent").length
        }
    }
}

function foo(eventType){
        return _.filter(events, {'type':eventType});
    }



//var pushEvents = _.filter(events, {'type':'PushEvent'})
console.log(answer());
//console.log(answer());

//function answer(){
//  return {
//    'total': ...,    // How many total events did you fetch?
//    'PushEvent': {
//      'total': ...,  // How many total events of type `PushEvent` are there?
//      'perDay': ...  // On average, how many`PushEvent` entries per day?
//    },
//    'other': {
//      'total': ...,  // How many _other_ events are in the data?
//      'perDay': ...  // How many per day, on average?
//    }
//  };
//} // END answer