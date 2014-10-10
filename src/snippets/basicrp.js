var fs = require('fs');
fs.readFile(__filename, function display(err, data) {
  console.log('>> second concurrent execution path');
  console.log(err || data.toString());
})
console.log('>> first concurrent execution path');