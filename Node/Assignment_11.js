const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
function greetHandler() {
  console.log('Hello! This is an event being handled.');
}
eventEmitter.on('greet', greetHandler);
eventEmitter.emit('greet');
