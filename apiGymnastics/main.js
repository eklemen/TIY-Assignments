var events = require('./events.json');

function answer(){
    console.log(events.length);
    return {
        'total': events.length,
        'PushEvent':{
            'total':
        }
    }
}

console.log(answer());

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