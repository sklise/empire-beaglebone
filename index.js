var Cylon = require('cylon');
var io = require('socket.io-client');

socket = io.connect('http://sk-empire-socket.herokuapp.com');

Cylon.robot({
  connection: { name: 'beaglebone', adaptor: 'beaglebone' },
  device: { name: 'led', driver: 'led', pin: 'P9_12' },

  work: function(my) {
    my.led.turnOff()
    //socket.on('connect', function () { my.led.turnOn});
    //every((1).second(), my.led.toggle);
    socket.on('flash', function () { 
        my.led.turnOn(); 
        //after(250, my.led.turnOff)
        setTimeout(function () {
            console.log('timedout')
            my.led.turnOff()
        }, 150);
    }); 
  }
}).start();