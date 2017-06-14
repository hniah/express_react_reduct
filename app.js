var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', './views');
app.use('/static',express.static('public'));
app.listen(3000, () => console.log('Server started'))
app.get('/', (req, res) => res.render('home'));
	