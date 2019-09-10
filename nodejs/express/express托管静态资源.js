var fs = require('fs');
var express = require('express');
var app = express();
app.use('/css', express.static('css'));
app.listen(8888, function () {
    console.log('running...');
});