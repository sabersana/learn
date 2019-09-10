var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var html = `
    <form action="/test" method="get">
    <input type="text" name="myname"><br>
    <input type="text" name="myage"><br>
    <input type="submit" value="提交">
</form>
    `
    res.send(html);
});
app.get('/test', function (req, res) {
    res.send('get到了');
});
app.post('/test', function (req, res) {
    res.send('post到了');
    console.log(req.params);
});
app.listen(8888, function () {
    console.log("启动成功，兄die");
});