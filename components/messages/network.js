const express = require('express');
const response = require('../../network/response');
const router = express.Router();
const controller = require('./controller');


router.get('/', function(req, res){
    controller.getMessages()
    .then((messageList)=>{
        response.success(req, res, messageList, 200);
    })
    .catch(e => {
        response.error(req, res, 'Unexpected error', 500, e);
    })
});

router.post('/', function(req, res){
    controller.addMessage(req.body.user, req.body.message)
         .then((fullMessage)=>{
            response.success(req, res, fullMessage,  201);
         })
         .catch(e =>{
            response.error(req, res, 'Invalid inform ation', 400, 'Controller error');
         });    
    // res.status(201).send({error: '', body: 'Created correctly'});

});


module.exports = router;