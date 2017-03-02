var express = require('express'),
		app = express();

app.use(express.static(__dirname));

// root path (home url)
app.get('/', function(req,res){
	res.sendFile(__dirname + '/public/views/home.html');
})

app.listen(3000, function(){
	console.log('working')
})