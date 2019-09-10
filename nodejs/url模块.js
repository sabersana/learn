var url = require('url');
var data = 'https://search.bilibili.com/all?keyword=node.js';
console.log(url.parse(data));
console.log(url.parse(data, true));

var kw = url.parse(data, true).query;
console.log(kw.keyword);
