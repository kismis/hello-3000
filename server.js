var express = require('express');
var server = express();
server.get('/', function(req, res){
  res.send({
    hello: 'engine2'
  });
});
server.listen(8000);
console.log('~> 8000');
