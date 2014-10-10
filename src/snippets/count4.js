var app = require('express')();

var _rep = 42;

app.get('/', function reply(req, res){
  res.send('' + _rep);
  _rep += 1;
});

if (!module.parent) {
    app.listen(8080);
    console.log('>> listening 8080');
}

exports.app = app;
