let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// Template engine
app.set('view engine', 'ejs');

// Middleware
app.use('/assets', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Routes
app.get('/', (request, response) => {
  response.render('pages/index', {test :'Salut'});
});

app.post('/', (request, response) => {
  console.log(request.body);
});

app.listen(8080);
