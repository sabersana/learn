var http = require('http');

var ser = http.createServer();

ser.on('request', function (req, res) {
    var $res = "404";
    if (req.url == '/'){
        $res = 'this is index!<br>这是首页';
    } else if( req.url == '/login' ) {
        $res = 'this is login! <br>这是登录界面';
    }
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.write($res);
    res.end();
});

ser.listen( 8888, function () {
    console.log('启动成功！');
});