var events = require('./events.json');
var _ = require('lodash');

function eventSearch(eventType){
        return _.filter(events, {'type':eventType});
    }
function getDate (eventType){
    return _.pluck(_.filter(eventSearch(eventType)), 'created_at')
};
var pushEventDates = getDate("PushEvent");

function dateDiff(){
    return _.first(getDate) - _.last(getDate);
}



function answer(){
    return {
        'total': events.length,
        'PushEvent':{
            'total': eventSearch("PushEvent").length,
            'perDay': _.first(pushEventDates).substring(8, 10) - _.last(pushEventDates).substring(8, 10)
        }
    }
}

console.log(pushEventDates);
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