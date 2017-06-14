var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.set('views', __dirname + '/views');

app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render("index"); //render template index.pug
});

app.listen(3000, () => console.log('Server started'));

