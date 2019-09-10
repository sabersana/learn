var path = require('path');
var url = 'F:\\前端\\nodejs\\path模块.js';
console.log(path.basename(url));
url = path.dirname(url);
console.log(path.basename(url));