const store = require('./store');


function addMessage(user, message, date){
    return new Promise((resolve, reject) =>{
        if (!user || !message){
            console.error('[messageControler] No hay usuario o mensaje')
            return reject('Los datos son incorrectos');
            return false;
        }
        console.log(user);
        console.log(message);
        console.log(date);
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        };
        store.add(fullMessage);
        resolve(fullMessage);
    });
    
};

function getMessages(filterUser){
    return new Promise((resolve, reject)=>{
        resolve(store.list(filterUser));
    });
}

function updateMessage(id, message){
    return new Promise(async(resolve, reject)=>{
        console.log(id);
        console.log(message);
        if (!id || !message){
            reject('Invalid data');
            return false;
        }
        const result = await store.updateText(id, message);
        resolve(result);
    })
};

function deleteMessage(id){
    return new Promise((resolve, reject)=>{
        if(!id){
            reject('invalid ID');
            return false;
        }
        store.remove(id)
           .then(()=>{
            resolve();
           })
           .catch(e =>{
            reject(e);
           })
    })
};

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
};