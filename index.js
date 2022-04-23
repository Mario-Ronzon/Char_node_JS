var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

var server = app.listen(PORT, function(){
  console.log('listening on port ' + PORT)
});
app.use(express.static('client'));