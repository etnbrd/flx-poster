var app = require('express')();

var _rep = 42;

app.get("/A", function replyA(req, res){
  _rep += 1;
  res.send("" + _rep);
});

app.get("/B", function replyB(req, res){
  _rep += 2;
  res.send("" + _rep);
});

if (!module.parent) {
    app.listen(8080);
    console.log(">> listening 8080");
}

exports.app = app;