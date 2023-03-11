const express = require('express');
const bodyParser = require('body-parser');
// const router = express.Router();

// const router = require('./components/messages/network')
const router = require('./network/router');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// app.use(router);

router(app);

// app.use('/', function(req, res){
//     res.send('Hola');
// });


app.use('/app', express.static('public'));

app.listen(3000);

console.log('App is being listened at http://localhost:3000')

