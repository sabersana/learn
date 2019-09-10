var express = require('express');
var app = express();
app.engine('html', require('express-art-template'));
app.get('/', function (req, res) {
    res.render('index.html', {
        username:'蔡徐坤',
        age:15,
        orders: [
            {id:1, hobby:'唱'},
            {id:2, hobby:'跳'},
            {id:3, hobby:'rap'},
            {id:4, hobby:'篮球'},
            {id:5, hobby:'music'},
        ],
    })
});
app.listen(8888, function () {
    console.log("启动成功，兄die");
});