var fs = require('fs');
fs.writeFile('fs模块.txt', 'hello world!', function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('success');
});
fs.readFile('fs模块.txt', 'utf-8', function (err, data) {
    if (err){
        console.log(err);
        return;
    }
    console.log(data);//或是上文不加utf-8，后文输出时data.toString();
});