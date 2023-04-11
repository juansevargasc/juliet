// Event emitter is a class that is used to emit events.
// 'events' is a core module in Node.js.
const EventEmitter = require('events');
const celebrity = new EventEmitter();

// Subscribe to celebrity for Observer 1
celebrity.on('Race Win', function(){
    console.log('Congratulations! You are the best!')
});

// Subscribe to celebrity for Observer 2
celebrity.on('Race Win', function(){
    console.log('Boo, I could have done better!')
});

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`)
});

celebrity.emit('Race Win');
celebrity.emit('Race Lost');
celebrity.emit('Race Win');