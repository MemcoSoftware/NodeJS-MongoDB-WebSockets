
const Model = require('./model');



function addMessage(message){
    // list.push(message);
    const myMessage = new Model(message);
    myMessage.save();

}


async function getMessages(filterUser){
    return new Promise ((resolve, reject)=>{
        let filter = {}
    if(filterUser !== null){
        filter = {user: filterUser};
    }
    const messages = Model.find(filter).catch(e =>{
        reject(e);
    });
    resolve(messages);

    });
    
}

async function updateText(id, message){
    const foundMessage = await Model.findOne({
        _id: id
    });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage
};



function removeMessage(id){
    return Model.deleteOne({
        _id: id
    });
};

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage,
    //get
    //update
    //delete
}