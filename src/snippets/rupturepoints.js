var app = require('express')();
var fs = require('fs');

app.get('/:filename', function handleRequest(req, res) {
  fs.readFile(__dirname + '/' + req.params.filename, function reply(err, data) {
    res.send(err || data);
  })
});

app.listen(8080);
console.log('server listening to 8080');