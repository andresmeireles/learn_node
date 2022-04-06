const EventEmmiter = require('events');
const customEmmiter = new EventEmmiter();

customEmmiter.on('response', (name, id) => {
    console.log(`data received name: ${name} and id: ${id}`);
});

customEmmiter.emit('response', 'jão', 44);