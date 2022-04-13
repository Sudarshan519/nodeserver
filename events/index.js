const EventEmitter = require("events");
const { emit } = require("process");
const event = new EventEmitter();
// $('.btn').on('click', ()=>{ });

// event.on('sayMyName', () => {
//     console.log('your name is Sudarshan.');
// });
// event.on('sayMyName', () => {
//     console.log('your name is Shrestha.');
// });
 
event.on('checkPage', (sc,msg) => { 
    console.log(`status code is ${sc} and the pakge is ${msg}`);
});
// event.emit("sayMyName");
event.emit('checkPage', 200, "ok");
// const fs = require('fs');
