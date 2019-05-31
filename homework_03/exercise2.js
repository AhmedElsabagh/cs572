const EventEmitter = require('events');

function doEmit(obj){
    obj.emit('boom',obj.message);
}

class Gym extends EventEmitter {
    constructor(){
        super();
        this.message = 'Athelte is working out';
    }

    startListen(){
        setInterval(doEmit,1000,this);
    }
}

var gym = new Gym();

gym.on('boom',function(message){
console.log(message);
});

gym.startListen();

