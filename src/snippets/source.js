var app = require('express')(),
    fs = require('fs'),
    count = 0;

app.get('/', function handler(req, res){
  
  fs.readFile(__filename, function reply(error, data) {
    count += 1;
    res.send('this file was downloaded ' + count + ' times\n\n' + data);
  });
});

if (!module.parent) {
    app.listen(8080);
    console.log('>> listening 8080');
}