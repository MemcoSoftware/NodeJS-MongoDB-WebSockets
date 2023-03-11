const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const response = require('./network/response');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(router);


router.get('/message', function(req, res){
    console.log(req.headers);
    res.header({
        "custom-header" : "nuestro valor personalizado"
    });
    // res.send('lista de mensajes')
    response.success(req, res, 'messages list');
})

router.post('/message', function(req, res){
    console.log(req.body);
    if (req.query.error == "ok"){
        response.error(req, res, 'Error simulado', 401);
    }else{
        response.success(req, res, 'created correctly', 201);

    }
    
    // res.status(201).send({error: '', body: 'Created correctly'});

})


// app.use('/', function(req, res){
//     res.send('Hola');
// });


app.use('/app', express.static('public'));

app.listen(3000);

console.log('App is being listened at http://localhost:3000')

