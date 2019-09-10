var express = require('express');
var app = express();
app.get('/test/:name/:age', function (req, res) {
    console.log(req.params);
    res.send('success!');
});
app.listen(8888, function () {
    console.log('running...');
});