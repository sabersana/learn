var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var html = `
    <form action="/test" method="post">
    <input type="text" name="myname"><br>
    <input type="text" name="myage"><br>
    <input type="submit" value="提交">
</form>
    `
    res.send(html);
});
app.use('/test', function (req, res) {
    res.send('use到了');
});
app.listen(8888, function () {
    console.log("启动成功，兄die");
});