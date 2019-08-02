var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('publishVideo', function(message){
    console.log(message)
});

emitter.emit('publishVideo', "ABC has auploded a new video");