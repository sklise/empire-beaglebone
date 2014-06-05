var Cylon = require('cylon');
var socket = require('socket.io-client')('http://sk-empire-socket.herokuapp.com')

Cylon.robot({
  connection: { name: 'beaglebone', adaptor: 'beaglebone' },
  device: { name: 'led', driver: 'led', pin: 'P9_12' },

  work: function(my) {
    my.led.turnOff()
    socket.on('flash', function () { 
      my.led.turnOn();
      after(250, my.led.turnOff)
    }); 
  }
}).start();
