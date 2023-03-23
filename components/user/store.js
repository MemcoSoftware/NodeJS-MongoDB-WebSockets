const Model = require('./model');

function addUser(user){
    const myUser = new Model(user);
    return myUser.save();
};

function listUsers(){
    return StorageEvent.list();
}

module.exports = {
    addUser,
    listUsers,
};