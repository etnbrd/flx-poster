var app = require('express')(),
    fs = require('fs'),
    count = 0;

app.get('/', function handler(req, res){
  fs.readFile(__filename, function reply(err, data) {
    count += 1;
    var code = ('' + data).replace(/\n/g, '<br>').replace(/ /g, '&nbsp');
    res.send(err || 'downloaded ' + count + ' times<br><br><code>' + code + '</code>');
  });
});

app.listen(8080);
console.log('>> listening 8080');