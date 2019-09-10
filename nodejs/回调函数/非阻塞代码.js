var fs = require('fs');
var data = fs.readFile('text.txt', function(err, data){
	if(err) {console.log("err");return;}
	console.log(data.toString());
});

console.log("to the end");