var events = require('./events.json');
var _ = require('lodash');

function eventSearch(eventType){
        return _.filter(events, {'type':eventType});
    }
var numOfPushEvents = eventSearch("PushEvent").length;
var getDates = _.pluck(events, 'created_at');

function rangeOfEvents(){
    var firstLastDate = _.first(getDates).substring(8, 10) - _.last(getDates).substring(8, 10) + 1;
    return firstLastDate;
}
var pushPerDay = numOfPushEvents / rangeOfEvents();
var otherPerDay = (events.length - numOfPushEvents) / rangeOfEvents();
var uniqueCount = _.uniq(events, 'type').length;

function answer(){
    return {
        'total': events.length,
        'unique-events': uniqueCount,
        'PushEvent':{
            'total': numOfPushEvents,
            'perDay': pushPerDay
        },
        'other':{
            'total': events.length - numOfPushEvents,
            'perDay': otherPerDay
        }
    }
}

console.log(answer());