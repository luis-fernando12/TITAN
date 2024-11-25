var EventEmitter = require("events")

var eventEmitter = new EventEmitter() 

eventEmitter.on('star', () => {
    console.log('Durante')
})

console.log('Antes')

eventEmitter.emit ('star')

console.log('Depois')