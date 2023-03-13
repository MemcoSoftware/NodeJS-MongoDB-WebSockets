const express = require('express');
const response = require('../../network/response');
const router = express.Router();
const controller = require('./controller');


router.get('/', function(req, res){
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
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

router.patch('/:id', function(req, res){
    console.log(req.params.id);

    controller.updateMessage(req.params.id, req.body.message)
         .then((data)=>{
            response.success(req, res, data, 200);
         })
         .catch(e =>{
            response.error(req, res, 'Internal error', 500, e);
         });
});

router.delete('/:id', function(req, res){
    controller.deleteMessage(req.params.id)
         .then(()=>{
            response.success(req, res, `User ${req.params.id} deleted`, 200)

         })

         .catch(e=>{
           response.error(req, res, 'Internal error', 500, e); 
         })
})

module.exports = router;