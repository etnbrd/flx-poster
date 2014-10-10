var flx = require('flx');
var app = require('express')();
var _rep = 42;
app.get('/A', function placeholder() {
  return flx.start(flx.m('replyA-1005', {
    _args: arguments,
    _sign: {}
  }));
});
app.get('/B', function placeholder() {
  return flx.start(flx.m('replyB-1006', {
    _args: arguments,
    _sign: {}
  }));
});
if (!module.parent) {
  app.listen(8080);
  console.log('>> listening 8080');
}
exports.app = app;

// replyA-1005 >> ø

flx.register('replyA-1005', function capsule(msg) {
  if (msg._update) {
    for (var i in msg._update) {
      this[i] = msg._update[i];
    }
  } else {
    (function replyA(req, res) {
      this._rep += 1;
      res.send('' + this._rep);
    }.apply(this, msg._args));
  }
}, { _rep: _rep });

// replyB-1006 >> ø

flx.register('replyB-1006', function capsule(msg) {
  if (msg._update) {
    for (var i in msg._update) {
      this[i] = msg._update[i];
    }
  } else {
    (function replyB(req, res) {
      this._rep += 2;
      res.send('' + this._rep);
    }.apply(this, msg._args));
  }
}, { _rep: _rep });